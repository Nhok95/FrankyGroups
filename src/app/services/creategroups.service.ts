import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreategroupsService {

  groupName: string = undefined;
  groupSize: number = undefined;
  members: string[] = [];

  result = new Map();

  constructor() { }

  setNombre(name: string) {
    this.groupName = name;
  }

  setTamanyo(size: number) {
    this.groupSize = size;
  }

  setMembers(members: any[]) {
    for(let m of members) {
      this.members.push(m.nombre);
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  generate():Map<string, string[]> {
    let groupsNumber = Math.floor(this.members.length /this.groupSize);

    console.log(groupsNumber);

    var groupID = [];

    for (let i = 0; i < this.members.length; i++) {
        groupID.push(i % groupsNumber);
    }

    groupID = this.shuffle(groupID);
    
    for (let i = 0; i < groupsNumber; i++) {
        this.result.set(this.groupName + "_" + i, []);

    }

    for (let j = 0; j < groupID.length; j++) {

        var groupmembers = this.result.get(this.groupName+ "_"+ groupID[j]);
        groupmembers.push(this.members[j]);
        this.result.set(this.groupName+ "_"+ groupID[j], groupmembers);

    }

    return this.result;
    //console.log(result.values());
    /*for (keys of this.result.keys()){
        console.log(`${key}: ${this.result.get(key)}`);
    }  
*/
}
  
}
