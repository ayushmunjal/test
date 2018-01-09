import { Component, OnInit } from '@angular/core';

declare var jQuery;

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  host: {
    '(document:keyup)': 'onKeyPress($event)'
  }
})
export class TooltipComponent implements OnInit {

  disabled=5000;

  constructor() { }

  ngOnInit() {
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.keyCode==27){
      this.disabled = 1;
    console.log(event.keyCode);}
    // this.disabled = undefined;
    
  }

  enable(){
    this.disabled=5000;
  }

}
