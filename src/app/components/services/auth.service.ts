import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Environment } from '../../../environments/enums/environment.enum';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token;
  constructor(private cookieService: CookieService) {
    if (environment.buildType === Environment.Production) {
      this.token = this.cookieService.get('PARE_token');
    } else {
      this.token = this.cookieService.set(
        'PARE_token',
        'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6ImVlYWU4MWIzLTAzZmQtNDY2Ny05YWY1LTIzNzdjMWQ0YjM2OCIsImlzcyI6IlBBUkVfU2VydmVyIiwiaWF0IjoxNzM2MTQ2MDMyLCJleHAiOjE3MzY0MDUyMzIsImNsaWVudElkIjoiKiIsInBhcnRpdGlvbiI6ImRlZmF1bHQiLCJ2ZXJzaW9uIjoiMiIsInBlcm1pc3Npb25zIjoiSDRzSUFBQUFBQUFBQUhTUVFRckNNQkJGNzVLMWVBQmRDVlUzQ2dVWExrdWFmR3N3ellUTTFGclV1eXZZalpBd3kvZm1EMytlU2pORGxvYUNKUEllU2EyVXZPWlpxOFhNRVRvWHdIbllVM0JDeFUxeE11WFo2WEJzenBSdUYwOWozdGpZdXpQWVBnejhIaUh2UkQzMTN5dk5FRDFwVzJwZ3lYU2xoTHJhRmRNcnpkZVdkTEoxSWdNdXZFREE4bXZLRWJELzB2c0RBQUQvL3dNQXg1clN1MllCQUFBPSIsImF0dHJpYnV0ZXMiOiJINHNJQUFBQUFBQUFBSHlRTVU4RE1ReUYvOHJKY3haZ1k2dmFJalpRN3phT3djMVpPWXM0U1JNSHFVTDg5eVl0aUkzSmZwK2VueTEvd2ZqQjNzTWpiS2NYODhRQmc2VmhJaFN6WThlV2ZCTjJEV3pSRHp0S0NnYjBCaGhERzlOY3FiRk1qbVBYeit4V2oyRXA1ckFkN3N4RVJZM2xiRDNkLzlTSFpxK0ZzcDRUdFFGY2hFTkRDNWIxR0RFdmpiM05zTEhLbjdRL1ZVNUNRVWRGcldXc0lwalBNNWdaWHJHVS94Mm9SZEU1RHU0cVk2S01Hbk94c1FhOU9hNUxmaFArZUJJclBZbDYwbnM3amdTNVA2bTFFby9zKytId2ZRRUFBUC8vQXdCb3RNT0pQUUVBQUE9PSJ9.CD30o-pNmZZlhHCsURTDJm6CRrIFHS1ZFyuEIFkdAjz54VCX7aAxaHRFQrLGZi-GK6XLaEg6Cf2V5x2vhPKH0bkB3FljLuIYAI4XS7FsFocbrbCsvr1oj0IGE1Yz4okHy7f7Wq8NECu-btiMad9ZC4iKpdwh4VscziprNSAJEmiohNhTWvBlvPD5T0PUCF-Kxh_OcLj-kIBOwMGGXabWBjbYUXRtEpnYLlmWS48ShfBrxCjVDx5GeS91Bc7q80idEWUCJyf5O8swP6vFJvyM_FtgVlbvEdLXvnX0qbPte97ruhdZdoifLlV5G7p5eLnt_rwUXWq7wPwVqcXqHWLS7w',
      );
    }
  }

  isAuthorised(): boolean {
    if (this.token != '') {
      return true;
    } else {
      return false;
    }
  }
}
