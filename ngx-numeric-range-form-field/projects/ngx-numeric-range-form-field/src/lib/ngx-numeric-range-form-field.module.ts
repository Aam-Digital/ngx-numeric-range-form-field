import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NumericRangeFormFieldContainerComponent } from './numeric-range-form-field-container/numeric-range-form-field-container.component';
import { NumericRangeFormFieldControlComponent } from './numeric-range-form-field-control/numeric-range-form-field-control.component';

@NgModule({
  declarations: [
    NumericRangeFormFieldContainerComponent,
    NumericRangeFormFieldControlComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [
    NumericRangeFormFieldContainerComponent,
    NumericRangeFormFieldControlComponent,
  ],
})
export class NgxNumericRangeFormFieldModule {}