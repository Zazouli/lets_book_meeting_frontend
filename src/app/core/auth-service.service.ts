import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private msalService: MsalService) {}

    getAccessToken(): Observable<any> {
        const scopes = [`api://${environment.msalConfig.auth.clientId}/user.read`]; // define scopes needed for your API
        return this.msalService.acquireTokenSilent({ scopes: scopes });
    }
}