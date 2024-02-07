import { ValidationErrors } from '@angular/forms';

export const VALIDATOR_MESSAGE_DEFAULT: ValidationErrors = {
  required: 'Este campo es requerido',
  email: 'Ingrese un Email valido',
  max: 'Excede el valor máximo, max:${max} valor actual:${current}',
};
