import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../../auth/authorize.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  hasChildren?: boolean;
  children?: RouteInfo[];
  subMenuId?: string;
  authRoles?: string[];
}
export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', hasChildren: false, authRoles: ['SuperAdmin','Admin','DataEntry'] },
];
export const LOOCKUPS_ROUTES: RouteInfo[] = [
  { path: '/add-rate', title: 'Add Rate', icon: 'swap_vert', class: '', authRoles: ['Admin', 'User'] },
  { path: '/sprint-champions', title: 'Sprint Champions', icon: 'groups', class: '', authRoles: ['Admin', 'User'] },
  { path: '/add-session', title: 'Add Session', icon: 'source', class: '', authRoles: ['Admin'] },
  { path: '/rate-average', title: 'Rates Average', icon: 'business', class: '', authRoles: ['Admin'] },
  { path: '/user-rates', title: 'User Rates', icon: 'supervised_user_circle', class: '', authRoles: ['Admin'] },
  // { path: '/loockups/business-status', title: 'Business Status', icon: 'cases', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/contacts', title: 'BusineCity Contacts', icon: 'badge', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/country', title: 'Country', icon: 'villa', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/city', title: 'City', icon: 'location_city', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry'] },
  // { path: '/loockups/no-of-employee', title: 'No Of-Employee', icon: 'badge', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/filter', title: 'Filters', icon: 'filter_list', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/group', title: 'Groups', icon: 'groups', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/job-title', title: 'Job Title', icon: 'work', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/nationality', title: 'Nationalities', icon: 'tour', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/sub-sector', title: 'Sub Sector', icon: 'store', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/sector', title: 'Sector', icon: 'account_balance', class: '', authRoles: ['SuperAdmin', 'Admin','DataEntry', 'user'] },
  // { path: '/loockups/contact-us', title: 'Contact Us', icon: 'contact_mail', class: '', authRoles: ['SuperAdmin', 'user'] },
  // { path: '/loockups/app-settings', title: 'App Settings', icon: 'settings', class: '', authRoles: ['SuperAdmin', 'user'] },

  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  loockupsItems: any[];
  public authorizeRoles;
  constructor(private authService: AuthorizeService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.loockupsItems = LOOCKUPS_ROUTES.filter(menuItem => menuItem);
    this.authorizeRoles = this.authService.getLoggedInUsersRole();
  }
  public checkRoles(tabRoles: string[]) {
    if (this.authorizeRoles.find(x => tabRoles.find(t => t == x))) {
      return true;
    }
    return false;
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
