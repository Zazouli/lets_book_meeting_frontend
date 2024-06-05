import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { LoginShellComponent } from './userManagementDomain/features/shellComponents/login-shell/login-shell.component';
import { RoomManagementShellComponent } from './roomManagementDomain/features/room-management-shell/room-management-shell.component';
import { RoomManagementComponent } from './roomManagementDomain/ui/room-management/room-management.component';
import { DashboardShellComponent } from './shared/features/dashboard-shell/dashboard-shell/dashboard-shell.component';
import { BookMeetingRoomShellComponent } from './bookingManagementDomain/features/book-meeting-room-shell/book-meeting-room-shell.component';
import { SearchAvailableRoomShellComponent } from './shared/features/search-available-room-shell/search-available-room-shell.component';
import { AddRoomShellComponent } from './roomManagementDomain/features/add-room-shell/add-room-shell.component';
import { BookedByYouShellComponent } from './shared/features/booked-by-you-shell/booked-by-you-shell.component';

export const routes: Routes = [
    {
        path: 'logins',
        component: LoginShellComponent,
    },
    {
        path: 'usermanagement',
        component: LoginShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: "bookmanagement/:id",
        component: BookMeetingRoomShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: 'login-failed',
        component: RoomManagementComponent
    },
    {
        path: 'findroom',
        component: SearchAvailableRoomShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: 'addroom',
        component: AddRoomShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: 'bookedbyyou',
        component: BookedByYouShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: 'dashboard',
        component: DashboardShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: '**',
        component: DashboardShellComponent,
        canActivate: [MsalGuard]
    },
];