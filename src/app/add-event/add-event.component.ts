import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { title, date, time, price, country, city, address } = f.value;
    this.http.post(environment.apiUrl, { title, date, time, price, country, city, address }).subscribe((data) => {
      alert("success");
    })
  }

}
