import { Component, OnInit } from '@angular/core';
import {Machine} from '../machine-def';
import Machine_Data from '../../assets/machine-list.json'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  machines: Machine[] = Machine_Data;

  constructor() { }

  ngOnInit(): void {
  }

}
