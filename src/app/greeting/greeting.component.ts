import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Input() person: Person;

  // names: [{name: string}] = [{name: 'Paul'}, {name: 'Dave'}, {name: 'Katia'}, {name: 'Owen'}, {name: 'John'}];

  constructor() { }

  ngOnInit() {
  }

}
