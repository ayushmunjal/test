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

  disabled;

  constructor() { }

  ngOnInit() {
  }

  onKeyPress(event: KeyboardEvent) {
    // if (event.keyCode==27){
    //   this.disabled = true;
    // console.log(event.keyCode);}
    // this.disabled = undefined;
    
  }

  enable(){
    this.disabled=undefined;
  }

}
