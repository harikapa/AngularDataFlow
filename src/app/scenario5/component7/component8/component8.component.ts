import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component8',
  templateUrl: './component8.component.html',
  styleUrls: ['./component8.component.css']
})
export class Component8Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() public childEvent = new EventEmitter();

  onSubmit(message)
  {
    this.childEvent.emit(message);
  }

}
