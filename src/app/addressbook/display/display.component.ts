import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Contact} from '../contact';
import {CONTACTS} from '../contact-list'
import {ContactserviceService} from '../contactservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  selectcontact:Contact;
  contacts:Contact[];
  selectedcontact:Contact;
  
  constructor(private data:ContactserviceService) { 
    this.selectcontact=data.getcontact();
    this.contacts=CONTACTS;
  }

  ngOnInit() {
  }

  delete(selectedContact):void{
    console.log("delete function is called");
    let index=this.contacts.indexOf(selectedContact);
    console.log(index)
    this.contacts.splice(index,1);

  }
  edit(contact: Contact): void {
    this.selectedcontact=contact;
    this.data.sendcontact(contact);
    console.warn(this.selectedcontact.email);
  }
}