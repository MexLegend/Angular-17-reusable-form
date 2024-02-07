import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'build-profile',
  },
  {
    path: 'build-profile',
    loadComponent: () =>
      import('./pages/build-profile/build-profile.component').then(
        (comp) => comp.BuildProfileComponent
      ),
  },
  {
    path: 'profile-details',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/profile-details/profile-details.component').then(
        (comp) => comp.ProfileDetailsComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (comp) => comp.NotFoundComponent
      ),
  },
];
