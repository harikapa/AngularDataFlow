import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component12',
  templateUrl: './component12.component.html',
  styleUrls: ['./component12.component.css']
})
export class Component12Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('parentData') public name;
}
