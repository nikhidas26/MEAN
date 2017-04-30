import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flassMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    console.log(user);

    this.authService.authenticateUser(user).subscribe( data => {

      console.log(data);
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flassMessagesService.show('You are not logged in', {
          cssClass: 'alert-success', 
          timeout: 5000
        });
        this.router.navigate(['dashboard'])
      } else {
        this.flassMessagesService.show(data.message, {
          cssClass: 'alert-danger', 
          timeout: 5000
        });
        this.router.navigate(['login']);
      }
    });

  }

}
