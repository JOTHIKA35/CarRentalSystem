import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm.validator';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  public reset!: FormGroup;
  private userId!: string;
  private apiUrl = environment.apiUrl;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userId = params['id'];
      this.reset = this.formBuilder.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.pattern(
                '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$'
              ),
            ],
          ],
          cpassword: ['', [Validators.required]],
        },
        { validator: ConfirmedValidator('password', 'cpassword') }
      );
    });
  }

  resetpass() {
    if (this.reset.valid) {
      const updatedPassword = this.reset.value.password;
      this.http
        .patch<any>(`${this.apiUrl}/registeredUser/${this.userId}`, {
          password: updatedPassword,
        })
        .subscribe(() => {
          alert('Password updated successfully');
          this.router.navigate(['/login']);
        });
    } else {
      alert('Please verify that all details were entered.');
    }
  }
}
