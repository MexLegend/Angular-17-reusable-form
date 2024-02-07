import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getAuthToken(): Observable<boolean> {
    return of(true);
  }
}
