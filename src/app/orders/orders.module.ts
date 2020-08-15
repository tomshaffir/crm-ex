import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { AddOrderItemsComponent } from './add-order-items/add-order-items.component';

@NgModule({
  imports: [SharedModule, OrdersRoutingModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatChipsModule, MatButtonModule],
  declarations: [OrdersRoutingModule.components, AddOrderItemsComponent]
})
export class OrdersModule { }
