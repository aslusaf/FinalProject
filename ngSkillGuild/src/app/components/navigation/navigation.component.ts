import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(
    private auth: AuthService
    ) { }

  ngOnInit(): void {
  }

    loggedIn(): boolean {
    return this.auth.checkLogin();
  }

}
