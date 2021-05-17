import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public company : [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
   // this.company =this._userService.getcompany(); 
  }

}