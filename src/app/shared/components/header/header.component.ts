import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public name: string;
  public mobileMenuVisible = false;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.name = this.auth.getUserData().name;
  }

  openLink(link: string) {
    this.mobileMenuVisible = false;
    this.router.navigateByUrl(link);
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('login');
    this.mobileMenuVisible = false;
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  clickOutSide(e) {
    if (!e.target.classList.contains('hamburger-button')) {
      this.mobileMenuVisible = false;
    }
  }
}
