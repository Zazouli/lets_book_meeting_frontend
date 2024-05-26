import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { RoomEntity } from '../domain/room.model';
import { AuthService } from '../../core/auth-service.service';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomMamangementService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public getAllAvailableRooms(): Observable<RoomEntity[]>{
    return from(this.authService.getAccessToken())
    .pipe(
      switchMap(token => {
        const headers = { Authorization: `Bearer ${token}` };
        return this.http.get<RoomEntity[]>(`${environment.apiUrl}roommanagement`, { headers: headers });
      })
    );
  }

  public getRoomDetails(roomId: string): Observable<RoomEntity>{
    return from(this.authService.getAccessToken())
    .pipe(
      switchMap(token => {
        const headers = { Authorization: `Bearer ${token}` };
        return this.http.get<RoomEntity>(`${environment.apiUrl}roommanagement/${roomId}`, { headers: headers });
      })
    );
  }
}
