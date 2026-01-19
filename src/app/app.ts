import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormField],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  loginModel = signal({email:'', password:''})
  loginForm = form(this.loginModel, (f) => {
    required(f.email, {message: "Please enter email address"})
    minLength(f.email, 5, {message: "Please enter a valid email"})
    email(f.email, {message: "Please enter valid email address"})
    required(f.password, {message: "Please enter password"})
    minLength(f.password, 5, {message: "Please enter valid password"})
    maxLength(f.password, 15, {message: "Please enter valid password"})
  })

  login(){
    console.log(this.loginForm.email().value())
    console.log(this.loginForm.password().value())
  }

  reset(){
    this.loginForm.email().value.set('')
    this.loginForm.password().value.set('')
  }
}

