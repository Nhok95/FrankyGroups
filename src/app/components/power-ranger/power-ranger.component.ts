import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-power-ranger',
  templateUrl: './power-ranger.component.html',
  styleUrls: ['./power-ranger.component.css']
})
export class PowerRangerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextComponent() {
    this.router.navigateByUrl('showGroups');
  }

}
