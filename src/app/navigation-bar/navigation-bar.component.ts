import { Component, OnInit } from '@angular/core';
import {Machine} from '../machine-def'
import Machine_Data from '../../assets/machine-list.json'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  machines: Machine[] = Machine_Data;

  constructor() { }

  ngOnInit(): void {
  }

}
