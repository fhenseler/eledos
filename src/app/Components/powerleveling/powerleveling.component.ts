import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerleveling',
  templateUrl: './powerleveling.component.html',
  styleUrls: ['./powerleveling.component.css']
})
export class PowerlevelingComponent implements OnInit {

  constructor() { }

  servers = ['Talking Island'];
  selectedServer = 'Talking Island';

  ngOnInit() {
  }

}
