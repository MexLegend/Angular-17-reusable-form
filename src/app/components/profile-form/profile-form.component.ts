import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PersonDataComponent } from '../person-data/person-data.component';
import { IUserForm } from '../../core/interfaces/user.interface';
import { AddressDataComponent } from '../address-data/address-data.component';
import { FormSubmitDirective } from '../../core/directives/form-submit.directive';
import { ControlErrorsDirective } from '../../core/directives/control-error.directive';
import { NgxValidators } from '../../core/helpers/ngx-validators';
import { qualifyingValidator } from '../../core/helpers/custom-validators';
import { QualifyingsService } from '../../core/services/qualifyings.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    PersonDataComponent,
    AddressDataComponent,
    ReactiveFormsModule,
    FormSubmitDirective,
    ControlErrorsDirective,
  ],
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.scss',
})
export class ProfileFormComponent {
  private _formBuilder = inject(NonNullableFormBuilder);
  private _qualifyingsService = inject(QualifyingsService);

  formGroup!: FormGroup<IUserForm>;

  constructor() {
    this.formGroup = this._formBuilder.group<IUserForm>({
      nickname: this._formBuilder.control('', {
        validators: [NgxValidators.required('Ingresa el nickname')],
        asyncValidators: [qualifyingValidator(this._qualifyingsService)],
      }),
      email: this._formBuilder.control('', {
        validators: [NgxValidators.required('Ingresa el email')],
      }),
      phone: this._formBuilder.control('', {
        validators: [NgxValidators.required('Ingresa el teléfono')],
      }),
      name: this._formBuilder.group({
        names: this._formBuilder.control('', {
          validators: [NgxValidators.required('Ingresa el nombre')],
        }),
        lastName: this._formBuilder.control('', {
          validators: [NgxValidators.required('Ingresa los apellidos')],
        }),
      }),
      address: this._formBuilder.group({
        city: this._formBuilder.control('', {
          validators: [NgxValidators.required('Ingresa la ciudad')],
        }),
        street: this._formBuilder.control('', {
          validators: [NgxValidators.required('Ingresa la calle')],
        }),
        zipcode: this._formBuilder.control('', {
          validators: [NgxValidators.required('Ingresa el código postal')],
        }),
      }),
    });
  }

  saveData(): void {
    const nicknameErrors = this.formGroup.controls.nickname.errors;

    nicknameErrors
      ? console.log({ nicknameErrors })
      : console.log(this.formGroup.getRawValue());
  }
}
