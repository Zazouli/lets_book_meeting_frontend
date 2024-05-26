import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { environment } from '../../../environment/environment';
import { AuthService } from '../../core/auth-service.service';
import { CreateBookingRequestModule } from '../domain/entities/create-booking-request.model';

@Injectable({
  providedIn: 'root'
})
export class BookingManagementService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public bookRoom(bookMeetingRoom: CreateBookingRequestModule): Observable<any>{
    return from(this.authService.getAccessToken())
    .pipe(
      switchMap(token => {
        const headers = { Authorization: `Bearer ${token}` };
        return this.http.post(`${environment.apiUrl}bookingmanagement`,{bookingDetails: bookMeetingRoom}, { headers: headers });
      })
    );
  }
}
