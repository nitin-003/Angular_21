import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  // userName = signal("Nitin Pathak")
  
  users = signal(["Nitin", "Ram", "Sam", "Peter"])
  newUser = signal('')

  addNewUser(){
    this.users.update((data) => ([...data, this.newUser()]))
  }
}


