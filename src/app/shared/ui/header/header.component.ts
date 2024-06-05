import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  @Output() onLogout = new EventEmitter<void>();

  toggleSidenav(): void {
    this.menuOpen = !this.menuOpen;
  }

  public logout(){
    console.log('logging out app-header');
    this.onLogout.emit();
  }
}
