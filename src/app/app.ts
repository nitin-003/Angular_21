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
  isLogin = signal(false)
  show = signal(true)
  status = signal('error')

  handleLogin(status: boolean){
    this.isLogin.set(status)
  }

  handleStatus(event:Event){
    let target = event.target as HTMLSelectElement;
    this.status.set(target.value)
  }
}


