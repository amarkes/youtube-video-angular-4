import { Component, OnInit } from '@angular/core';
import { CepService } from '../../services/cep/cep.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CepModel } from '../../services/cep/cep.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: Date;
  form: FormGroup;
  constructor(private service: CepService) {
    this.form = this.createForm();
  }

  ngOnInit() {
    this.title = new Date();
  }
  changeHome(event: Date): void {
    this.service.get('01001000').subscribe(res => {
      console.log(res);
    });
    this.title = event;
  }
  autoCompleteCep(event: CepModel): void {
    this.form.get('logradouro').setValue(event.logradouro);
    this.form.get('complemento').setValue(event.complemento);
    this.form.get('bairro').setValue(event.bairro);
    this.form.get('localidade').setValue(event.localidade);
    this.form.get('uf').setValue(event.uf);
    this.form.get('unidade').setValue(event.unidade);
    this.form.get('ibge').setValue(event.ibge);
    this.form.get('gia').setValue(event.gia);
  }
  protected createForm(): FormGroup {
    return new FormGroup({
      cep: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      complemento: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      localidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
      unidade: new FormControl('', Validators.required),
      ibge: new FormControl('', Validators.required),
      gia: new FormControl('', Validators.required)
    });
  }

}
