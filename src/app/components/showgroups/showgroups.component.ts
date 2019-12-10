import { Component, OnInit } from '@angular/core';
import { CreategroupsService } from 'src/app/services/creategroups.service';
import { FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-showgroups',
  templateUrl: './showgroups.component.html',
  styleUrls: ['./showgroups.component.css']
})
export class ShowgroupsComponent implements OnInit {

  groups:Map<string, string[]> = new Map();

  groupsTable: any[] = [];
  cols: any[];

  constructor(private creategroupsService: CreategroupsService) { }

  ngOnInit() {
    this.groups = this.creategroupsService.generate();
    this.cols = [
      {field: 'groupName', header:'groupName'},
      {field: 'members', header: 'members'}
    ];

    for (let key of this.groups.keys()) {
      console.log(key +": " + this.groups.get(key));
      this.groupsTable.push({groupName:key, members:this.groups.get(key).toString()});
    }
  }

}
