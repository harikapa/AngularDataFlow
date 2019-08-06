import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {

  constructor() { }

  //output decorator to send data from child to parent
  @Output() public event = new EventEmitter();

  ngOnInit() {
  }

  onSubmit(name: string)
  {
      console.log(name);
      this.event.emit(name);
  }
}
