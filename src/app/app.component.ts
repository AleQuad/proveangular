import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

// https://jsonplaceholder.typicode.com/albums



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['userId', 'id', 'title'];
  RESULT : Album[] = [];

  dataSource = this.RESULT;

  constructor(http : HttpClient){
    http.get<Album>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(RESULT => {
        console.log("entro nelle api", RESULT);
    });
  }
}
