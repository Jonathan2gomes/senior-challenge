import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddEditProductComponent} from './add-edit-product.component';

import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {InputTextModule} from 'primeng/inputtext'
import {InputNumberModule} from 'primeng/inputnumber'
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    CalendarModule,
    CheckboxModule,
    FormsModule
  ],
  exports: [
    AddEditProductComponent
  ]
})
export class AddEditProductModule {
}
