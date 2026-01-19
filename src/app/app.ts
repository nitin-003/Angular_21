import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  userDetails: any;

  addUser(form: NgForm) {
    console.log(form.value);
    this.userDetails = form.value;
    form.reset();
  }
}

