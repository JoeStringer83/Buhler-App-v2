import { Component, OnInit, Input } from '@angular/core';
import {Machine} from '../../machine-def'

@Component({
  selector: 'app-machine-overview',
  templateUrl: './machine-overview.component.html',
  styleUrls: ['./machine-overview.component.css']
})
export class MachineOverviewComponent implements OnInit {
  @Input() machine!: Machine;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
