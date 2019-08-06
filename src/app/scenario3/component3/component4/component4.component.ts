import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Input decorator to send data from parent to child
  @Input('parentData') public name;
}
