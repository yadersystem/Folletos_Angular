import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'folletos';

  users: any[] = [];

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
