import { Injectable } from '@angular/core';
import { Observable, from, switchMap } from 'rxjs';
import { RoomSummaryModel } from '../domain/entities/room-summary.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/auth-service.service';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  public GetRoomSummaries(): Observable<RoomSummaryModel[]>{
    return from(this.authService.getAccessToken())
    .pipe(
      switchMap(token => {
        const headers = { Authorization: `Bearer ${token}` };
        return this.http.get<RoomSummaryModel[]>(`${environment.apiUrl}api/availablerooms`, { headers: headers });
      })
    );
  }

  public getAllRoomSummaries(): Observable<RoomSummaryModel[]>{
    return from(this.authService.getAccessToken())
    .pipe(
      switchMap(token => {
        const headers = { Authorization: `Bearer ${token}` };
        console.log(`request success roken ${token}`)
        return this.http.get<RoomSummaryModel[]>(`${environment.apiUrl}api/getallsummaries`, { headers: headers });
      })
    );
  }

}
