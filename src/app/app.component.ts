import { Component, OnInit} from '@angular/core';
import { AuthorizeService } from '../auth/authorize.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService:AuthorizeService){}
  ngOnInit(): void {
    console.log(this.authService.getLoggedInUsersRole())
  }

}
