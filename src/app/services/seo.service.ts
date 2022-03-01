import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateTitle(title: string) {
    this.titleService.setTitle(title);
    this.updateMeta('title', title);
    this.updateMeta('og:title', title);
    this.updateMeta('twitter:title', title);
  }

  updateMeta(name: string, content: string) {
    this.metaService.updateTag({ name, content });
  }

  updateLang(lang: string) {
    try {
      this.document.documentElement.lang =
        (lang != null || lang != '') && lang?.length > 2
          ? lang[0] + lang[1]
          : 'en';
    } catch (error) {
      this.document.documentElement.lang = 'en';
    }
  }
}
