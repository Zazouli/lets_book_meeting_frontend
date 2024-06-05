import { Component, OnInit } from '@angular/core';
import { BookedByYouComponent } from '../../ui/booked-by-you/booked-by-you.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { SharedStateService } from '../store/shared-state-service/shared-state.service';
import { Observable } from 'rxjs';
import { BookedByUserDTO } from '../../domain/entities/booked-by-user.model';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../../core/auth-service.service';

@Component({
  selector: 'app-booked-by-you-shell',
  standalone: true,
  imports: [BookedByYouComponent, HeaderComponent, AsyncPipe],
  templateUrl: './booked-by-you-shell.component.html',
  styleUrl: './booked-by-you-shell.component.scss'
})
export class BookedByYouShellComponent implements OnInit {

  public bookedByUser$!: Observable<BookedByUserDTO[]>;

  constructor(private sharedStateService: SharedStateService, private authService: AuthService) {}
  ngOnInit(): void {
    this.sharedStateService.dispatchLoadBookedByUserAction();
    this.bookedByUser$ = this.sharedStateService.selectBookedByUser();
  }

  public logout() {
    console.log('logging out');
    this.authService.logout();
  }
}
