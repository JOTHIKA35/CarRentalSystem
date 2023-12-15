import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  // styles:[`input.ng-invalid{border :2px solid red;} input.ng-valid{border-left:2px solid green;}`]
})
export class SignUpComponent implements OnInit{

  public signupform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit():void{
    this.signupform=this.formBuilder.group({
      username:['',[Validators.required,Validators.pattern("^(?!.*([a-zA-Z0-9!@#$%^&*])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{4,12}$")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.(?:co|com|ac\.in|org)$")]],
      phone:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      address:['',[Validators.required,Validators.pattern("^.{10,100}$")]],
      password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$")]],
      cpassword: ['', [Validators.required]]
  }, { validator: ConfirmedValidator('password','cpassword') })
  }
  signup() {
    if (this.signupform.valid){
    this.http.get<any>(`${environment.apiUrl}/registeredUser`).subscribe(res => {
      const user = res.find((result: any) => {
        return result.email === this.signupform.value.email;
      });

      if (user) {
        alert("Email Already Exists");
        this.router.navigate(['/login']);
      }

      else {
        this.http.post<any>(`${environment.apiUrl}/registeredUser`, this.signupform.value)
          .subscribe((data) => {
            alert("Register Successful!");
            this.router.navigate(['/login']);
          });
        }
     });
  }
  else{
    alert('Please verify that all of the details were entered.');
  }}
}

