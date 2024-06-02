import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { LoginShellComponent } from './userManagementDomain/features/shellComponents/login-shell/login-shell.component';
import { RoomManagementShellComponent } from './roomManagementDomain/features/room-management-shell/room-management-shell.component';
import { RoomManagementComponent } from './roomManagementDomain/ui/room-management/room-management.component';
import { DashboardShellComponent } from './shared/features/dashboard-shell/dashboard-shell/dashboard-shell.component';
import { BookMeetingRoomShellComponent } from './bookingManagementDomain/features/book-meeting-room-shell/book-meeting-room-shell.component';

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
    },{
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