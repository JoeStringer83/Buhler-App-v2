import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  date: Date = new Date()
  formatted_date = ''
  constructor() {
    setInterval(() => {
      this.date = new Date();
      this.formatted_date = formatDate(this.date, "dd.MM.yyyy  hh:mm", 'en-UK')
    }, 1);
  }

  ngOnInit(): void {
  }

}
