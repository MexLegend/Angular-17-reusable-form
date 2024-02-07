import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QualifyingsService {
  private _qualifyings = ['bruto', 'idiota', 'estupido'];

  checkIfQualifyingExists(value: string) {
    return of(
      this._qualifyings.some((qualifying) => value.search(qualifying) > -1)
    ).pipe(delay(1000));
  }
}
