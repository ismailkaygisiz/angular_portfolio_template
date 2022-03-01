import { Component, OnInit } from '@angular/core';
import {
  generatedNavbarAbout,
  generatedNavbarBrand,
  generatedNavbarContact,
  generatedNavbarDiscover,
  generatedNavbarMedia
} from 'src/data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  navbarBrand = generatedNavbarBrand;
  navbarAbout = generatedNavbarAbout;
  navbarDiscover = generatedNavbarDiscover;
  navbarMedia = generatedNavbarMedia;
  navbarContact = generatedNavbarContact;

  constructor() {}

  ngOnInit(): void {}
}
