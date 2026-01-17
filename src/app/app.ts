import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App{
  tasks = signal([
    { id: 0, title: "team lunch", completed: false }
  ])

  title = signal('')

  addTask(){
    if(this.title()){
      this.tasks.update((item) => (
        [...item, { id: this.tasks().length, title: this.title(), completed: false }]
      ))
      this.title.set('')
    }
  }

  deleteTask(id: number){
    this.tasks.update((tasks) => tasks.filter(task => task.id != id))
  }
}

