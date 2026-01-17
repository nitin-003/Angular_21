import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,              
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']        
})

export class App {
  userName = signal("Nitin Pathak") 
  userData = signal({
    college: "IIIT Bhagalpur",
    email: "nitin@gmail.com"
  })

  get uName(){
    return this.userName();
  }

  set uName(val:string){
    this.userName.set(val);
  }

  get userCollege(){
    return this.userData().college
  }

  set userCollege(val){
    this.userData.update((item) => ({...item, college:val}))
  }

  get userEmail(){
    return this.userData().email
  }

  set userEmail(val){
    this.userData.update((item) => ({...item, email:val}))
  }
}

