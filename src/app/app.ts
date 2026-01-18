import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  students = ["Nitin", "Ram", "Sam", "Peter"]
  studentsData = [
    {name: "Nitin", age: 23, email: "nitin@gmail.com"},
    {name: "Ram", age: 28, email: "ram@gmail.com"},
    {name: "Sam", age: 30, email: "sam@gmail.com"},
    {name: "Peter", age: 32, email: "peter@gmail.com"}
  ]

  login = true;

  color = "black";
  changeColor(color: string){
    this.color = color;
  }
}

