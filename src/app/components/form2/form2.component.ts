import { Component, OnInit } from '@angular/core';
import { CreategroupsService } from 'src/app/services/creategroups.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  members: any[] = [];
  newMember: string = "";
  cols: any[]; 

  constructor(private router: Router, private creategroupsService: CreategroupsService) { }

  ngOnInit() {
    this.cols = [{field: 'nombre', header: 'Nombre'}];
  }

  addMember() {
    
    this.members.push({nombre: this.newMember});
    this.newMember = "";
  }

  shuffleGroups() {

    this.creategroupsService.setMembers(this.members);

    this.router.navigateByUrl('shuffleScreen');

  }

}
