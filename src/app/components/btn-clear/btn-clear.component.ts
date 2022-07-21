import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-clear',
  template: `
    <button class="btn-clear">
      Clear! - inline style and template
    </button>
    <br/><br/>
  `,
  styles: [
    '.btn-clear{color:blue}'
  ]
})
export class BtnClearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
