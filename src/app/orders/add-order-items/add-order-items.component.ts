import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IOrder } from 'src/app/shared/interfaces';

@Component({
  selector: 'cm-add-order-items',
  templateUrl: './add-order-items.component.html',
  styleUrls: ['./add-order-items.component.css']
})
export class AddOrderItemsComponent {

  public inputValue = '';

  public addedItemsList: IOrder[] = [];

  constructor(public dialogRef: MatDialogRef<AddOrderItemsComponent>) { }

  AddItem() {
    if (this.inputValue.length !== 0) {
      // add the new item, there is no prices or product table so generate random price
      this.addedItemsList.push({ itemCost: Math.floor(Math.random() * 100), productName: this.inputValue });
      // clear the inputValue for future items
      this.inputValue = '';
    }

  }

  RemoveItem(index) {
    this.addedItemsList.splice(index, 1);
  }

  CloseDialog() {
    this.dialogRef.close();
  }

  DoneAddingItems() {
    this.dialogRef.close(this.addedItemsList);
  }


}
