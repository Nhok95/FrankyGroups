import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreategroupsService } from 'src/app/services/creategroups.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startButton() {
    this.router.navigateByUrl('form1');
  }

}
