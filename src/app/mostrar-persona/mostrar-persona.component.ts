import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {
 
 @Input() pers = {};

  constructor() { }

  ngOnInit() {
  }

}
