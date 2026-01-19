import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})

export class UserDetails {
  userData = signal<any | null>(null);
  constructor(public userService:UserService, public route:ActivatedRoute){}
  ngOnInit(){
    const data = this.userService.userList();
    this.route.params.subscribe((params) => {
      const filteredData = data.filter((item) => item.id == params['id'])
      this.userData.set(filteredData[0])
    })
  }
}

