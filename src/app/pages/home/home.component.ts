import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: Date;
  constructor() { }

  ngOnInit() {
    this.title = new Date();
  }
  changeHome(event: Date): void {
    this.title = event;
  }

}
