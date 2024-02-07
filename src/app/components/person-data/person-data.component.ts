import { Component, Input, OnInit, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlErrorsDirective } from '../../core/directives/control-error.directive';
import { FormSubmitDirective } from '../../core/directives/form-submit.directive';

@Component({
  selector: 'app-person-data',
  standalone: true,
  imports: [ReactiveFormsModule, FormSubmitDirective, ControlErrorsDirective],
  templateUrl: './person-data.component.html',
  styleUrl: './person-data.component.scss',
})
export class PersonDataComponent implements OnInit {
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
