import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../components/services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router_ = inject(Router);
  const authService = inject(AuthService);
  if (authService.isAuthorised()) {
    return true;
  } else {
    return router_.navigate(['login']);
  }
};
