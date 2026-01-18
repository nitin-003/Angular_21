import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { CurrencyConvertorPipe } from './custom-pipe/currency-convertor-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TrimTextPipe, CurrencyConvertorPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  title = signal("Nitin Pathak")
  name = signal("My Name is Nitin Pathak")
  amount = signal(20)
}


