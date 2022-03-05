import { Component, OnInit } from '@angular/core';
import {
  generatedDiscoverOneDescription,
  generatedDiscoverOneTitle,
  generatedDiscoverThreeDescription,
  generatedDiscoverThreeTitle,
  generatedDiscoverTwoDescription,
  generatedDiscoverTwoTitle,
  generatedNavbarDiscover,
} from 'src/data';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
})
export class DiscoverComponent implements OnInit {
  discover = generatedDiscoverOneTitle;
  discoverOneTitle = generatedDiscoverOneTitle;
  discoverTwoTitle = generatedDiscoverTwoTitle;
  discoverThreeTitle = generatedDiscoverThreeTitle;
  discoverOneDescription = generatedDiscoverOneDescription;
  discoverTwoDescription = generatedDiscoverTwoDescription;
  discoverThreeDescription = generatedDiscoverThreeDescription;

  constructor() {}

  ngOnInit(): void {}
}
