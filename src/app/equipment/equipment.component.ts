import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipments: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  equipmentBeingEdited: string;
  constructor() { }

  ngOnInit() {
  }

  add(equipment: string) {
    this.equipments.push(equipment);
  }

  remove(equipment: string) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }

  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
  }

  save(updatedEquipment: string) {
    let index = this.equipments.indexOf(updatedEquipment);
    this.equipments.splice(index, 1, updatedEquipment);
    this.equipmentBeingEdited = null;
  }

}
