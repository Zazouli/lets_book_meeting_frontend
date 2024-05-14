import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginShellComponent } from './userManagementDomain/features/shellComponents/login-shell/login-shell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lets_book_meeting_room';
}
