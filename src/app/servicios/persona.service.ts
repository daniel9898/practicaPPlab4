import { Injectable } from '@angular/core';
import { HttpService } from './http.service'; 

@Injectable()
export class PersonaService {

  constructor(public miHttp: HttpService) { }

  getAllPerson(){
    return this.miHttp.get('persona/');
  }

  savePerson(person : any){
    return this.miHttp.post('persona/', person);
  }

  deletePerson(id : number){
  	return this.miHttp.delete('persona/'+id);
  }

}
