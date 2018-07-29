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
    private robotsService: RobotsService,
    private partsService: PartsService
  ) {
  }

  ngOnInit() {
    this.robotsService.getRobots().subscribe((robots) => {
      this.robots = robots;
    });
    this.partsService.getParts().subscribe((parts) => {
      this.parts = parts;
    });
    this.fillSummaryData();
  }

  fillSummaryData() {
    this.summary.robots.howMany = null;
    this.summary.robots.howManyGPU = this.filterByGPU();
    this.summary.robots.firstByAge = this.sortByNumber();
    this.summary.robots.firstByName = this.sortByString();
    this.summary.robots.firstByType = this.sortByString();
    // add summary.parts
  }

}

/*
<h3>Robots Summary</h3>
<p>number of robots: </p>
<p>number of robots with GPU engine:</p>
<p>first robot (name) sorted by age</p>
<p>first robot (name) sorted by name</p>
<p>first robot (name) sorted by type</p>
</section>

<section>
<h3>Parts Summary</h3>
<p>number of parts: </p>
<p>number of parts with GPU engine:</p>
<p>first part (name) sorted by name</p>
<p>first part (name) sorted by type</p>
*/
