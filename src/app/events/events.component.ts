import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];
  constructor(private http: HttpClient) {
    http.get(environment.apiUrl).subscribe((data: any) => {
      this.events = data;
    })
   }

   delete(id, index){
     const eventsOld = this.events;
    this.http.delete(`${environment.apiUrl}/${id}`).subscribe((data: any) => {
      eventsOld.splice(index, 1);
      this.events = eventsOld;
    }, (err) => {
      console.log(err);
      alert(err.message);
    })
  }

  ngOnInit(): void {
  }

}
