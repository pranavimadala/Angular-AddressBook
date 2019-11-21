import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Contact} from '../contact';
import {CONTACTS} from '../contact-list';
import {ContactserviceService} from '../contactservice.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 title="AddressBook"
 contacts:Contact[];
 selectedcontact:Contact;
  constructor(private contact:ContactserviceService) { }
  @Output() eventClicked = new EventEmitter<Contact>();

  ngOnInit() {
    console.log('Main layout constructor called');
    this.contacts=CONTACTS;
  }

  onSelect(contact: Contact): void {
    this.selectedcontact=contact;
    this.contact.sendcontact(contact);
    console.warn(contact.email);
  }
  delete(selectedContact):void{
    console.log("delete function is called");
    let index=this.contacts.indexOf(selectedContact);
    console.log(index)
    this.contacts.splice(index,1);

  }
}