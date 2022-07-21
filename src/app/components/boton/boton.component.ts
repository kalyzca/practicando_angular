import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  template: `
    <button>Crear</button>
  `,
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
