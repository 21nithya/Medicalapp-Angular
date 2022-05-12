import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
emailId!:string;
pass!:string;

  constructor(private http:HttpClient,private toastr:ToastrService){ }

  ngOnInit(): void {
    //this.UserLogin();
  }

  userLogin(){
    const userObj={
      "email":this.emailId,
      "pass":this.pass
    };
    let message!:string
    const url="http://localhost:9001/users/login"
    this.http.post(url,userObj).subscribe((res:any)=>{
      console.log(res);

        this.toastr.success('Login success!..');

      
    },(err)=>{
      console.log(err);
      this.toastr.error('Login failed!');
    })
  }

}
