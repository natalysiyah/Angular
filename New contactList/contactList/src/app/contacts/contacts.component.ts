import { Component, OnInit } from "@angular/core";
import { Contacts } from "../mockContact";
import { Contact } from "../contact";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  constructor() {}
  contacts = Contacts;

  selectedContact: Contact;
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
  ngOnInit() {
    
  }
}
