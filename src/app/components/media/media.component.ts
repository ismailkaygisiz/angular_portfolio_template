import { Component, OnInit } from '@angular/core';
import { generatedMediaList, generatedMediaTitle } from 'src/data';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent implements OnInit {
  mediaTitle = generatedMediaTitle;
  mediaList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.mediaList = generatedMediaList;
    console.log(this.mediaList);
  }
}
