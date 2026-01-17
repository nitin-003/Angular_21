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
  userData = signal({
    name: "Nitin Pathak",
    age: 23,
    email: "nitin@gmail.com"
  })

  updateUserData(key:string, val:string){
    this.userData.update((item) => ({...item, [key]: val}));
    // if(key == 'name'){
    //   this.userData.update((item) => ({...item, name: val}));
    // }
    // if(key == 'age'){
    //   this.userData.update((item) => ({...item, age: parseInt(val)}));
    // }
    // if(key == 'email'){
    //   this.userData.update((item) => ({...item, email: val}));
    // }
  }
}


