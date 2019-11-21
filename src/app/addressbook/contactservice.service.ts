import { Injectable } from '@angular/core';
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  contactdetail: Contact;
  status = true;
  constructor() { }

  getcontact() {
    return this.contactdetail;
  }

  getservice() {
    return this.status;
  }

  sendcontact(index) {
    if (index == null) {
      this.contactdetail = null;
      this.setservice();
    }
    else {
      this.contactdetail = index;
      this.sendservice();
    }
    console.log(this.contactdetail.address);

  }

  sendservice() {
    this.status = false;
  }

  setservice() {
    this.status = true;
  }
}
