import { Component, OnInit } from '@angular/core';
import {
  generatedHeaderEmail,
  generatedHeaderInstagramLink,
  generatedHeaderLinkedinLink,
  generatedHeaderTag,
  generatedHeaderTitle,
  generatedHeaderTwitterLink,
} from 'src/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerTitle = generatedHeaderTitle;
  headerTag = generatedHeaderTag;
  headerInstagramLink = generatedHeaderInstagramLink;
  headerTwitterLink = generatedHeaderTwitterLink;
  headerLinkedinLink = generatedHeaderLinkedinLink;
  headerEmail = '';

  constructor() {}

  ngOnInit(): void {
    this.headerEmail += 'mailto:';
    this.headerEmail += generatedHeaderEmail;
  }
}
