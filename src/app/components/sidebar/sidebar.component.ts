import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/applicants', title: 'Loan Applicants',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/icons', title: 'Manage Products',  icon:'ni-planet text-blue', class: '' },
    { path: '/user-profile', title: 'Business profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/maps', title: 'Verify Me',  icon:'ni-pin-3 text-orange', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
  logout(){
    this.authService.SignOut()
  }
}
