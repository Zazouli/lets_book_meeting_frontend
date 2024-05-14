import { Component } from '@angular/core';
import { LoginComponent } from '../../../ui/login/login.component';

@Component({
  selector: 'app-login-shell',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-shell.component.html',
  styleUrl: './login-shell.component.scss'
})
export class LoginShellComponent {

}
