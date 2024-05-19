import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../ui/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../../../core/auth-service.service';
import { environment } from '../../../../../environment/environment';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { filter } from 'rxjs';
import { AuthenticationResult, EventMessage, EventType } from '@azure/msal-browser';

@Component({
  selector: 'app-login-shell',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-shell.component.html',
  styleUrl: './login-shell.component.scss'
})
export class LoginShellComponent implements OnInit {
    
    constructor(private http: HttpClient, private authService: MsalService, private msalBroadcastService: MsalBroadcastService) {}
    ngOnInit(): void {

    }

    callApiEndpoint() {
        // this.authService.getAccessToken().subscribe(authenticationResult => {
        //   console.log(authenticationResult.accessToken)
        //     const headers = new HttpHeaders().set('Authorization', `Bearer ${authenticationResult.accessToken}`);
        //     this.http.get(`${environment.apiUrl}/WeatherForecast`, { headers: headers })
        //         .subscribe(
        //             data => console.log('API response:', data),
        //             error => console.error('API error:', error)
        //         );
        // });
      }

}
