import { Component, OnInit } from '@angular/core';
import {
  generatedContactAddressDescription,
  generatedContactEmail,
  generatedContactLinks,
  generatedContactNumber,
  generatedContactNumberTitle,
  generatedContactTitle,
} from 'src/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactTitle = generatedContactTitle;
  contactAddressDescription = generatedContactAddressDescription;
  contactNumberTitle = generatedContactNumberTitle;
  contactNumber = '';
  contactEmailTitle = generatedContactEmail;
  contactEmail = '';
  contactLinks: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.contactNumber += 'tel:';
    this.contactNumber += generatedContactNumber;

    this.contactEmail += 'mailto:';
    this.contactEmail += generatedContactEmail;

    this.contactLinks = generatedContactLinks;
  }
}
