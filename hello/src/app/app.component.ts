import { Component, Inject } from '@angular/core';
//import {MailService} from'./mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*var initialStage: StageType[] = [
    { "id": 0, "name": "GEN", "duration": 1 },
    { "id": 0, "name": "CLONE", "duration": 2 },
    { "id": 0, "name": "VEG", "duration": 3 }
    { "id": 0, "name": "FLOW", "duration": 4 }
];*/


export class AppComponent {

  // stet(1)
  title = 'app works!! by Alumi';
  // step(4)
  //constructor(private mail:MailService){}
    constructor(
  		@Inject('mail') private mail,
  		@Inject('api') private api,
  	){}
    
  onClick_save(){
    
  }

  onUpdate(id, text){
    console.log('app'+id+text.text);
    this.mail.update(id, text.text);
  }
}
