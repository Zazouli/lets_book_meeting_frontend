import { Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { LoginShellComponent } from './userManagementDomain/features/shellComponents/login-shell/login-shell.component';
import { RoomManagementShellComponent } from './roomManagementDomain/features/room-management-shell/room-management-shell.component';
import { RoomManagementComponent } from './roomManagementDomain/ui/room-management/room-management.component';

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
        path: 'roommanagement',
        component: RoomManagementShellComponent,
        canActivate: [MsalGuard]
    },
    {
        path: 'login-failed',
        component: RoomManagementComponent
    }
//     {
//         path: '',
//         component: HomeComponent
//     },
//     {
//         path: 'login-failed',
//         component: FailedComponent
//     }
];