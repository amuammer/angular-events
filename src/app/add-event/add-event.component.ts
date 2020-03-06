import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  // is Edit component or Add
  isEdit = false;
  eventId ;
  // component state
  state = {
    title: "",
    date: "",
    time: "",
    price: "",
    country: "",
    city: "",
    address: "",
  }


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params;
    this.eventId = params.id;
    if(this.eventId) {
      this.isEdit = true;
    }
  }

  ngOnInit(): void {
      if(this.isEdit)
      this.http.get(`${environment.apiUrl}${this.eventId}`).subscribe((data: any) => {
        const { title, date, time, price, country, city, address } = data;
        this.state = { title, date, time, price, country, city, address };
      })
  }

  onSubmit(f: NgForm) {
    const { title, date, time, price, country, city, address } = f.value;
    // isEdit update else post
    if (this.isEdit) {
      this.http.put(`${environment.apiUrl}${this.eventId}`, { title, date, time, price, country, city, address }).subscribe((data) => {
        alert("success");
      });
    } else {
      this.http.post(environment.apiUrl, { title, date, time, price, country, city, address }).subscribe((data) => {
        alert("success");
      });
    }
  }

}
