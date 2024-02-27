import { HttpClient } from '@angular/common/http';
import { Component ,OnInit,Renderer2} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginUrlService } from '../login-url.service';
import { environment } from '../../environments/environment';
import { LoggerService } from '../logger.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // styles:[`input.ng-invalid{border :2px solid red;} input.ng-valid{border-left:2px solid green;}`]

})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup
  retUrl: any = 'login'
  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router:Router,private renderer:Renderer2,private slogin:AuthService,private route:ActivatedRoute,public previousUrlService:LoginUrlService,private logger: LoggerService) {
  }
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.(?:co|com|ac\.in|org)$")]],
      password:['',Validators.required]
    })

  }
  login() {
    if (this.loginForm.valid) {
      this.http.get<any>(`${environment.apiUrl}/registeredUser`)
        .subscribe(data => {
          const user = data.find((result: any) => {
            if (result.email === this.loginForm.value.email) {
              const resultString = JSON.stringify(result);
              this.logger.log(`User found: ${resultString}`);
              return result;
            }
          });

          if (user == null) {
            this.logger.warn('No user found');
            alert('No user Found');
          } else if (user.email === environment.adminEmail && user.password === environment.adminPassword) {
            this.logger.log('Login successful as Admin');
            alert('Login successful as Admin!!');
            this.router.navigate(['/adminhome']);
          } else if (user.password === this.loginForm.value.password) {
            this.logger.log('Login successful');
            alert('Login successful!!');
            this.slogin.login();
            this.slogin.setUser(user);

          const previousUrl = this.previousUrlService.getPreviousUrl();
          if (previousUrl && previousUrl !== '/login') {
            this.previousUrlService.setPreviousUrl('');
            this.router.navigateByUrl(previousUrl);
          } else {
            this.router.navigate(['/home']);
          }
        } else {
          this.logger.warn('Invalid Email or Password');
          alert('Invalid Email or Password!!');
        }
      });
  } else {
    this.logger.warn('Login form is invalid');
    alert('Please verify that all of the details were entered.');
  }}
}
