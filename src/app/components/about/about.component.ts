import { Component, OnInit } from '@angular/core';
import { generatedAboutDescription, generatedAboutTitle } from 'src/data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutTitle = generatedAboutTitle;
  aboutDescription = generatedAboutDescription;

  constructor() {}

  ngOnInit(): void {}
}
