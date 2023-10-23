import { Component, OnInit } from '@angular/core';

import { SharedDataService } from './services/sharedDataService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title!: string;

  constructor(private sharedService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedService.getTitle$().subscribe((data) => {
      this.title = data;
    });
  }
}
