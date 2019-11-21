import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contact } from '../contact';
import { pushcontact, CONTACTS } from '../contact-list';
import { ContactserviceService } from '../contactservice.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addressForm: FormGroup;
  contactslist: Contact[];
  status: boolean;
  submitted:boolean=false;
  selectcontact: Contact;
  update: Contact;
  contactModel: Contact;

  constructor(private fb: FormBuilder, private contact: ContactserviceService) {
    console.log("add called");

  }


  ngOnInit() {
    this.contactslist = CONTACTS;
   this.status = this.contact.getservice();
    if (this.contact.getservice()) {
      this.selectcontact = new Contact({});
    }
    else {
      this.selectcontact = this.contact.getcontact();
      this.update=this.selectcontact;
    }

    this.update = this.selectcontact;
    this.addressForm = this.fb.group({
      name: [this.selectcontact.name, Validators.required],
      email: [this.selectcontact.email, Validators.email],
      mobile: [this.selectcontact.mobile, Validators.maxLength(10)],
      landline: [this.selectcontact.landline, Validators.required],
      website: [this.selectcontact.website, Validators.required],
      address: [this.selectcontact.address, Validators.required],
    });
  }
  onSubmit() {
this.submitted=true;
    this.contactModel = new Contact(this.addressForm.value);
    pushcontact(this.contactModel);
    this.addressForm.reset();
  }
  edited() {
    let index=this.contactslist.indexOf(this.update);
    console.log(index)
    this.contactslist.splice(index,1);
    this.contactModel = new Contact(this.addressForm.value);
    pushcontact(this.contactModel);
  }
}