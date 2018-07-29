import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/robot.model';
import { RobotsService } from '../../services/robots.service';
import { PartsService } from '../../services/parts.service';
import { Part } from '../../models/part.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary = {
    robots: null,
    parts: null
  };
  robots: Robot[];
  parts: Part[];

  static filterByGPU() {
    return null;
  }

  static sortByNumber() {
    return null;
  }

  static sortByString() {
    return null;
  }

  constructor(
    // private robotsService: RobotsService,
    // private partsService: PartsService
  ) {
  }

  ngOnInit() {
    // this.robotsService.getRobots().subscribe((robots) => {
    //   this.robots = robots;
    // });
    // this.partsService.getParts().subscribe((parts) => {
    //   this.parts = parts;
    // });
    this.fillSummaryData();
  }

  fillSummaryData() {
    // this.summary.robots.howMany = null;
    // this.summary.robots.howManyGPU = SummaryComponent.filterByGPU();
    // this.summary.robots.firstByAge = SummaryComponent.sortByNumber();
    // this.summary.robots.firstByName = SummaryComponent.sortByString();
    // this.summary.robots.firstByType = SummaryComponent.sortByString();
  }

}

