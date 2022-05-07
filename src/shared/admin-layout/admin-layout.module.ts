import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { DashboardComponent } from '../shared-components/dashboard/dashboard.component';
import { IconsComponent } from '../shared-components/icons/icons.component';
import { MapsComponent } from '../shared-components/maps/maps.component';
import { NotificationsComponent } from '../shared-components/notifications/notifications.component';
import { TableListComponent } from '../shared-components/table-list/table-list.component';
import { TypographyComponent } from '../shared-components/typography/typography.component';
import { UpgradeComponent } from '../shared-components/upgrade/upgrade.component';
import { UserProfileComponent } from '../shared-components/user-profile/user-profile.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,

    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  providers:[ ]
})

export class AdminLayoutModule {}
