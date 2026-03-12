import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MatCardModule, MatFormField, ReactiveFormsModule, MatInputModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  form!: FormGroup;

  protected readonly title = signal('smartpowerenergy');

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,63}$")]],
      phone: [null, Validators.pattern("[0-9]{10}")],
      message: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });

  }

  public sendEmail(values: any) {}

}
