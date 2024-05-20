import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private authService: MsalService) {}

    public async getAccessToken(): Promise<string> {
        const accounts = this.authService.instance.getAllAccounts();
        const tokenResult  = await this.authService.instance.acquireTokenSilent({
            scopes: ['api://8b70fd3b-18ce-4d8e-a91f-dbb5cf889c95/access_as_user'],
            account: accounts[0]
          });
        return tokenResult.accessToken
    }
}