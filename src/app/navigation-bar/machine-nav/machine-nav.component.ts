import { Component, OnInit, Input } from '@angular/core';
import {Machine} from '../../machine-def'

@Component({
  selector: 'app-machine-nav',
  templateUrl: './machine-nav.component.html',
  styleUrls: ['./machine-nav.component.css']
})
export class MachineNavComponent implements OnInit {
  @Input() machine!: Machine;

  constructor() { }

  ngOnInit(): void {
  }

}
