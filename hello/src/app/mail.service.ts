import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
	
	message = [
		{id:0, text:'msg01'},
		{id:1, text:'msg02'},
		{id:2, text:'msg03'}
	]

  constructor() { }

  update(id, text){
  	console.log('service:'+id+text);
  	this.message = this.message.map(m=>
  		m.id === id
  		? {id, text}
  		: m
  		);
  }
}
