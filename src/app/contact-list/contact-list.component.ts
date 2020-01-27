import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ContactService: ContactService) { }

  getContacts(): void {
    this.contacts = this.ContactService.getContacts();
  }

  img = "https://miro.medium.com/max/1920/1*nb7ULdwbYpi1Y7WBbWZ2mw.png";

  ngOnInit() {
    this.getContacts();
  }

  contacts: Contact[];
  selectedContact: Contact;
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }


}
