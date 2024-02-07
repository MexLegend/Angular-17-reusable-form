import { Component, Input, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormSubmitDirective } from '../../core/directives/form-submit.directive';
import { ControlErrorsDirective } from '../../core/directives/control-error.directive';

@Component({
  selector: 'app-address-data',
  standalone: true,
  imports: [ReactiveFormsModule, FormSubmitDirective, ControlErrorsDirective],
  templateUrl: './address-data.component.html',
  styleUrl: './address-data.component.scss',
})
export class AddressDataComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) controlKey = '';

  private _parentContainer = inject(ControlContainer);
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.parentFormGroup;
  }

  get parentFormGroup() {
    return this._parentContainer.control?.get(this.controlKey) as FormGroup;
  }
}
