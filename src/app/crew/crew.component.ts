import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  
  memberBeingEdited: object = null;
  isPartOfCrew: boolean = false;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for (let members of this.crew) {
        if (members["name"] === memberName) {
          this.isPartOfCrew = true;
        }
    }
    if (!this.isPartOfCrew) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
    this.isPartOfCrew = false;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
