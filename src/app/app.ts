import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  email = new FormControl("")
  password = new FormControl("")

  login(){
    console.log(this.email.value, this.password.value)
  }

  reset(){
    this.email.setValue("")
    this.password.setValue("")
  }
}

