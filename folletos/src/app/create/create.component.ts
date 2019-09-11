import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreateService } from '../create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  users: any[] = [];
  name = new FormControl('');

  constructor(
    protected createService: CreateService
  ) {
  }

  ngOnInit() {
    this.createService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
