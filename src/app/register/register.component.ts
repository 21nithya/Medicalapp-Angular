import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
name!:String;
email!:String;
pass!:String;

  constructor(private http: HttpClient,private nithya:ToastrService) { }

  ngOnInit(): void {
  }
  register() {
    const userObj={
      "name": this.name,
      "email": this.email,
      "pass": this.pass
    };
    const url ="http://localhost:9001/user/save";
    this.http.post(url,userObj).subscribe((res:any)=>{
      console.log(res);
      alert("success");
      this.nithya.info(res.message);
    },(err)=>{
      console.log(err);
      alert(err.error.message);
      this.nithya.error("Failure");
    }
    );
}
}