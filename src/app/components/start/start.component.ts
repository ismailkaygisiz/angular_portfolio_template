import { Component, OnInit } from '@angular/core';
import { generatedStartDescription, generatedStartTitle } from 'src/data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  startTitle = generatedStartTitle;
  startDescription = generatedStartDescription;

  constructor() {}

  ngOnInit(): void {}
}
