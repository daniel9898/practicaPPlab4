import { Component } from '@angular/core';

import { PersonaService } from './servicios/persona.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public personas : Array<any>;
	public editar : boolean;
	public persona : any;
  
    constructor(public http: PersonaService){

    	this.editar = false;
    	this.persona = {};
    	this.getAllperson();


    }

    getAllperson(){
      this.http.getAllPerson()
	      .then(personas=>{
	      	console.log(personas);
	      	this.personas = personas;
	      })
	      .catch(error=>{
	      	console.log("ERROR : ",error);
	      });
    }

    savePerson(){
      this.persona.foto = "12.png";
      this.http.savePerson(this.persona)
          .then(data =>{
          	console.log(data);
          	this.personas.push(this.persona);
          	this.persona = {};
          })
          .catch(error=>{
          	console.log("ERROR : ",error);
          });
    }

    deletePerson(id : number){
    	this.http.deletePerson(id)
    	  .then(data =>{
          	console.log(data);
          	this.personas.forEach( (persona,index)=>{
          		if(persona.id == id)
                   this.personas.splice(index,1);
          	});
         
          })
          .catch(error=>{
          	console.log("ERROR : ",error);
          });
    }
}
