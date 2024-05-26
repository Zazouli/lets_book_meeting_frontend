import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { LoginShellComponent } from './userManagementDomain/features/shellComponents/login-shell/login-shell.component';
import { RoomManagementShellComponent } from './roomManagementDomain/features/room-management-shell/room-management-shell.component';
import { RoomManagementComponent } from './roomManagementDomain/ui/room-management/room-management.component';
import { DashboardShellComponent } from './shared/features/dashboard-shell/dashboard-shell/dashboard-shell.component';

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
        path: 'dashboard',
        component: DashboardShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path:'**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login-failed',
        component: RoomManagementComponent
    }
];