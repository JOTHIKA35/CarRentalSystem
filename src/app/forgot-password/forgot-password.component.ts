import { HttpClient } from '@angular/common/http';
import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginUrlService } from '../login-url.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  private apiUrl = environment.apiUrl;
  public forgotpassword!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private renderer: Renderer2,
    private slogin: AuthService,
    private route: ActivatedRoute,
    public previousUrlService: LoginUrlService
  ) {
    // this.renderer.setStyle(document.body, 'background-color', 'rgb(188, 232, 255)');
  }
  ngOnInit(): void {
    this.forgotpassword = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-z0-9._%+-]+@[a-z0-9.-]+.(?:co|com|ac.in|org)$'
          ),
        ],
      ],
    });
  }
  password() {
    if (this.forgotpassword.valid) {
      this.http.get<any>(`${this.apiUrl}/registeredUser`).subscribe((data) => {
        const user = data.find((result: any) => {
          if (result.email === this.forgotpassword.value.email) {
            console.log(JSON.stringify(result));
            return result;
          }
        });

        if (user == null) {
          alert('User not found');
        } else {
          alert('verified!!');
          this.router.navigate(['/updatepassword'], {
            queryParams: { id: user.id },
          });
        }
      });
    } else {
      alert('Please verify that all of the details were entered.');
    }
  }
}
