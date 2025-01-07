import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'redirect',
  template: '',
  standalone: true,
  imports: [],
  providers: [],
})
export class LoginComponent implements OnInit {

  ngOnInit() {
    let loginURL = `${environment.basePathURL}/RuleServer/auth/validate?target=${environment.basePathURL}/slm-mobile`;
    window.location.href = loginURL;
  }
}
