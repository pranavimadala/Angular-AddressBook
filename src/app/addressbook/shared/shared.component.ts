import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
 title="AddressBook"
  constructor() { }

  ngOnInit() {
    console.log('Main layout constructor called');
  }

}