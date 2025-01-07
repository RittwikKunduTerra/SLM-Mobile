import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private showBackButtonSubject = new BehaviorSubject<boolean>(false);
  showBackButton$ = this.showBackButtonSubject.asObservable();

  constructor() {}

  showBackButton() {
    this.showBackButtonSubject.next(true);
  }

  hideBackButton() {
    this.showBackButtonSubject.next(false);
  }
}
