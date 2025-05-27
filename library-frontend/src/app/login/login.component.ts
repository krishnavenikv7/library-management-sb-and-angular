import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../_service/user-auth.service';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService,
    private userAuthSerivce: UserAuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any)=>{
        this.userAuthSerivce.setRoles(response.user.role);
        this.userAuthSerivce.setToken(response.jwtToken);
        this.userAuthSerivce.setUserId(response.user.userId);
        this.userAuthSerivce.setName(response.user.name);
        

        const role = response.user.role[0].roleName; // Assuming response.user.role[0].roleName contains the actual role from the DB
          if(role === 'ROLE_ADMIN') { // <--- CHANGE 'Admin' to 'ROLE_ADMIN'
             this.router.navigate(['/books']);
           } else if (role === 'ROLE_USER') { // <--- ADD this explicit check for regular users
                  this.router.navigate(['/borrow-book']);
           } else {
             // Handle other roles or a default redirection if needed
            console.warn("Unknown role:", role);
             this.router.navigate(['/access-denied']); // Or a generic home page
          }
       
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}



// ...

// ...