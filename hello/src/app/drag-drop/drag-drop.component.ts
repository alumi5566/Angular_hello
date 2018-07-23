import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  listTwo = [
      {id: 1, name: 'GEN', duration: 1 },
      {id: 2, name: 'CLONE', duration: 2 },
      {id: 3, name: 'VEG', duration: 3 },
      {id: 4, name: 'FLOW', duration: 4 }
  ];

  listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];

  constructor() { }

  ngOnInit() {
  }
  
  onClick_set(){
    //onInit()
    this.listTwo = [
      {id: 1, name: 'GEN', duration: 1 },
      {id: 2, name: 'CLONE', duration: 2 },
      {id: 3, name: 'VEG', duration: 3 },
      {id: 4, name: 'FLOW', duration: 4 }
    ];
  }

}
