import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  @ViewChild("container", { read:ViewContainerRef })
  container: ViewContainerRef | undefined

  async loadUserDetails(){
    this.container?.clear()
    const {UserDetails} = await import('./user-details/user-details')
    this.container?.createComponent(UserDetails)
  }
}

