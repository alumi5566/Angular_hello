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
}
