import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SeoService } from 'src/app/services/seo.service';
import { generatedTitle } from 'src/data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title: string = generatedTitle;

  constructor(
    private seoService: SeoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.seoService.updateTitle(this.title);
  }
}
