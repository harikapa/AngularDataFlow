import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component10',
  templateUrl: './component10.component.html',
  styleUrls: ['./component10.component.css']
})
export class Component10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() public siblingEvent = new EventEmitter();

  public name;

  onSubmit(name)
  {
    this.name = name;
  }
}
