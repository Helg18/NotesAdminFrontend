import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'hl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  public email;

  constructor(private dataservice: DataService) {
    this.email='';
  }

  ngOnInit() {
  }

  login(data) {
    this.dataservice.loginme(data);
  }

}
