import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserData } from './user-data/user-data';
import { AdminData } from './admin-data/admin-data';

@Component({
  selector: 'app-root',
  standalone: true,              
  imports: [RouterOutlet, UserData, AdminData],
  templateUrl: './app.html',
  styleUrls: ['./app.css']        
})

export class App {
  users = signal(["Nitin", "Ram", "Sam", "Peter"])
  usersDetail = signal([
    {id: 1, name: "Nitin", email: "nitin@test.com"},
    {id: 2, name: "Ram", email: "ram@test.com"},
    {id: 3, name: "Sam", email: "sam@test.com"},
    {id: 4, name: "Peter", email: "peter@test.com"}
  ])
}

