import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayCount, ControlCount],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  
}

