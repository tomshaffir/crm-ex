import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults, IOrder } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';
import { AddOrderItemsComponent } from './add-order-items/add-order-items.component';

@Component({
    selector: 'cm-customers-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {

    customers: ICustomer[];
    totalRecords = 0;
    pageSize = 5;

    constructor(
        private dataService: DataService,
        public trackbyService: TrackByService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getCustomersPage(1);
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
    }

    getCustomersPage(page: number) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.customers = response.results;
            });
    }


    openAddItemsDialog(customerIndex: number) {


        const dialogRef = this.dialog.open(AddOrderItemsComponent, {
            width: '40vw',
            minHeight: '10vh',
            data: [],
        });

        dialogRef.afterClosed().subscribe((newItems: IOrder[]) => {

            if (newItems) {
                // there are two ways to render the data:
                // 1) update the gui right away and if the server replay false remove all inserted items
                // 2) wait for server response then push items
                // ill chose the second way for time reasons
                const customer = this.customers[customerIndex];
                this.dataService.AddItemsToCustomer(customer.id, newItems).subscribe(serverRes => {
                    if (!serverRes) {
                        // Display warning message
                        return;
                    }
                    this.customers[customerIndex].orders.push(...newItems);
                    this.dataService.calculateCustomersOrderTotal(this.customers);
                });

            }

        });
    }

}
