import { FormControl, FormGroup } from '@angular/forms';

export interface IPersonDataForm {
  names: FormControl<string>;
  lastName: FormControl<string>;
}

export interface IAddressForm {
  street: FormControl<string>;
  city: FormControl<string>;
  zipcode: FormControl<string>;
}

export interface IUserForm {
  nickname: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  name: FormGroup<IPersonDataForm>;
  address: FormGroup<IAddressForm>;
}
