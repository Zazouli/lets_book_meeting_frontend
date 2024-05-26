import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MsalService, MsalModule, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, PopupRequest, RedirectRequest, EventMessage, EventType } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { environment } from '../environment/environment';
import { DashboardShellComponent } from './shared/features/dashboard-shell/dashboard-shell/dashboard-shell.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [CommonModule, MsalModule, RouterOutlet, RouterLink, MatToolbarModule, MatButtonModule, MatMenuModule, DashboardShellComponent]
})
export class AppComponent implements OnInit, OnDestroy {
  isIframe = false;
  loginDisplay = false;
  private token = "";
  private readonly _destroying$ = new Subject<void>();

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.authService.handleRedirectObservable().subscribe();
    this.isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

    this.setLoginDisplay();

    this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window
    
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        // const accounts = this.authService.instance.getAllAccounts();
        // if (accounts.length > 0) {
        //   // this.authService.instance.acquireTokenSilent({
        //   //   scopes: ['api://8b70fd3b-18ce-4d8e-a91f-dbb5cf889c95/access_as_user'],
        //   //   account: accounts[0]
        //   // }).then((response: AuthenticationResult) => {
        //   //   this.token = response.accessToken;
        //   //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        //   //   this.http.get(`${environment.apiUrl}WeatherForecast`, { headers: headers })
        //   //   .subscribe(
        //   //             data => console.log('API response:', data),
        //   //             error => console.error('API error:', error)
        //   // );
        //   //   console.log('Access Token:', response.accessToken);
        //   //   // Send this token to your backend
        //   // }).catch(error => {
        //   //   console.error(error);
        //   // });
        // }
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });
      
    //   this.msalBroadcastService.msalSubject$
    //   .pipe(
    //     filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
    //   )
    //   .subscribe((result: EventMessage) => {
    //     console.log(result);
    //     const payload = result.payload as AuthenticationResult;
    //     console.log(payload.accessToken)
    //       const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    //       this.http.get(`${environment.apiUrl}WeatherForecast`, { headers: headers })
    //       .subscribe(
    //                 data => console.log('API response:', data),
    //                 error => console.error('API error:', error)
    //     );
    //     //this.authService.instance.setActiveAccount(payload.account);
    //   });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount(){
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      let accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  loginRedirect() {
    if (this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
    } else {
      this.authService.loginRedirect();
    }
  }

  loginPopup() {
    if (this.msalGuardConfig.authRequest){
      this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
        .subscribe((response: AuthenticationResult) => {
          this.authService.instance.setActiveAccount(response.account);
        });
      } else {
        this.authService.loginPopup()
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
      });
    }
  }

  logout(popup?: boolean) {
    if (popup) {
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect();
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}