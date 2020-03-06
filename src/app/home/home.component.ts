import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events = [];
  constructor(private http: HttpClient) {
    http.get(environment.apiUrl).subscribe((data: any) => {
      this.events = data;
    })
   }

  ngOnInit(): void {
  }

}
