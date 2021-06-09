import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  images = ['../../../assets/1.jpg', '../../../assets/2.jpg', '../../../assets/3.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
