import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

//import { of } from 'rxjs/observable/of';

import {MailService} from'./mail.service';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import {DndModule} from 'ng2-dnd'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    // when facing error: $npm i rxjs-compat
    Ng2DragDropModule.forRoot(),
    // $npm install ng2-dnd --save
    DndModule.forRoot(),
    // For using [(ngModel)] in Angular 2, 4 & 5+, You need to import FormsModule from Angular form...
    FormsModule
  ],
  //providers: [MailService],
  providers: [
  	{provide:'mail', useClass:MailService},
  	{provide:'api', useValue:'http://localhost:3000/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

