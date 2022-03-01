import { Component, OnInit } from '@angular/core';
import {
  generatedFooterBackToTop,
  generatedFooterSignature,
  generatedHeaderEmail,
  generatedHeaderInstagramLink,
  generatedHeaderLinkedinLink,
  generatedHeaderTwitterLink,
} from 'src/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerBackToTop = generatedFooterBackToTop;
  footerInstagram = generatedHeaderInstagramLink;
  footerTwitter = generatedHeaderTwitterLink;
  footerLinkedin = generatedHeaderLinkedinLink;
  footerEmail = '';
  signature = generatedFooterSignature;

  constructor() {}

  ngOnInit(): void {
    this.footerEmail += 'mailto:';
    this.footerEmail += generatedHeaderEmail;
  }
}
