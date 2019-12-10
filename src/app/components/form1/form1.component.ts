import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreategroupsService } from 'src/app/services/creategroups.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  nombre: string = undefined;
  tamanyo: number = undefined;
  

  constructor(private router: Router, private creategroupsService: CreategroupsService) { }

  ngOnInit() {
    
  }

  crearButton() {

    this.creategroupsService.setNombre(this.nombre);
    this.creategroupsService.setTamanyo(this.tamanyo);

    this.router.navigateByUrl('form2');
  }

}
