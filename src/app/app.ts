import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  title = signal("code step by step")
  name = signal("")

  amount = 10000
  date = "24-08-2025"
  mobile = "Samsung"
  today = new Date()
  user = signal({name: 'Nitin', age: 29, email: 'nitin@gmail.com'})
}

