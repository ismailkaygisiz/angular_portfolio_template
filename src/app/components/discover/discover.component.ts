import { Component, OnInit } from '@angular/core';
import {
  generatedDiscoverOneDescription,
  generatedDiscoverOneTitle,
  generatedDiscoverThreeDescription,
  generatedDiscoverThreeTitle,
  generatedDiscoverTwoDescription,
  generatedDiscoverTwoTitle,
} from 'src/data';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  discoverOneTitle = generatedDiscoverOneTitle;
  discoverTwoTitle = generatedDiscoverTwoTitle;
  discoverThreeTitle = generatedDiscoverThreeTitle;
  discoverOneDescription = generatedDiscoverOneDescription;
  discoverTwoDescription = generatedDiscoverTwoDescription;
  discoverThreeDescription = generatedDiscoverThreeDescription;

  constructor() {}

  ngOnInit(): void {}
}
