import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  userList(){
    return [
      {id: 1, name: 'Nitin', email: 'nitin@gmail.com', city: 'Delhi'},
      {id: 2, name: 'Ram', email: 'ram@gmail.com', city: 'Mumbai'},
      {id: 3, name: 'Sam', email: 'sam@gmail.com', city: 'Noida'},
      {id: 4, name: 'Peter', email: 'peter@gmail.com', city: 'Hyderabad'},
    ]
  }
}

