import { Component, OnInit } from '@angular/core';
import { CepService } from '../../services/cep/cep.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: Date;
  constructor(private service: CepService) { }

  ngOnInit() {
    this.title = new Date();
  }
  changeHome(event: Date): void {
    this.service.get('01001000').subscribe(res => {
      console.log(res);
    });
    this.title = event;
  }

}
