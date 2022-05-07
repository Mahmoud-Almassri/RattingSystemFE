import { Routes } from '@angular/router';
import { RoleGuard } from '../../auth/role.guard';
import { AddsessionComponent } from '../../app/addsession/addsession.component';
import { DashboardComponent } from '../shared-components/dashboard/dashboard.component';
import { IconsComponent } from '../shared-components/icons/icons.component';
import { MapsComponent } from '../shared-components/maps/maps.component';
import { NotificationsComponent } from '../shared-components/notifications/notifications.component';
import { TableListComponent } from '../shared-components/table-list/table-list.component';
import { TypographyComponent } from '../shared-components/typography/typography.component';
import { UpgradeComponent } from '../shared-components/upgrade/upgrade.component';
import { UserProfileComponent } from '../shared-components/user-profile/user-profile.component';
import { RateAverageComponent } from '../../app/rate-average/rate-average.component';
import { UserRatesComponent } from '../../app/user-rates/user-rates.component';
import { AddRateComponent } from '../../app/add-rate/add-rate.component';
import { SprintChampionsComponent } from '../../app/sprint-champions/sprint-champions.component';


export const AdminLayoutRoutes: Routes = [

    // { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin', 'User'] } },
    { path: 'add-session', component: AddsessionComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin'] } },
    { path: 'add-rate', component: AddRateComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin', 'User'] } },
    { path: 'rate-average', component: RateAverageComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin'] }  },
    { path: 'user-rates', component: UserRatesComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin'] }  },
    { path: 'sprint-champions', component: SprintChampionsComponent, canActivate: [RoleGuard], data: { expectedRole:['Admin', 'User'] }  },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    {
        path: 'loockups',
        loadChildren: '../../loockups/loockups.module#LoockupsModule',
        canActivate: [RoleGuard],
        data: { expectedRole: ['DataEntry','Admin','SuperAdmin', 'user'] }
    }
];
