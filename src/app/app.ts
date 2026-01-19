import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  get name(){
    return this.loginForm.get("name")
  }

  get email(){
     return this.loginForm.get("email")
  }

  get password(){
     return this.loginForm.get("password")
  }

  handleProfile(){
    console.log(this.loginForm.value)
  }

  reset(){
    this.loginForm.setValue({ name:'', password:'', email:'' })
  }
}

