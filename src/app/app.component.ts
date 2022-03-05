import { Component, OnInit } from '@angular/core';
import { generatedLanguage, generatedTitle } from 'src/data';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = generatedTitle;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateTitle(this.title);
    this.seoService.updateLang(generatedLanguage);
  }
}
