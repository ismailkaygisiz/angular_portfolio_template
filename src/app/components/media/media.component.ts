import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  generatedMediaCVList,
  generatedMediaImageList,
  generatedMediaList,
  generatedMediaTitle,
} from 'src/data';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  mediaTitle = generatedMediaTitle;
  mediaCV: any[] = generatedMediaCVList;
  mediaImageList: any[] = generatedMediaImageList;
  mediaList: any[] = generatedMediaList;
  trustedMediaList: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    try {
      for (let media of this.mediaList) {
        media = this.sanitizer.bypassSecurityTrustResourceUrl(media);
        this.trustedMediaList.push(media);
      }
    } catch (error) {}
  }
}
