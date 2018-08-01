import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/robot.model';
import { RobotsService } from '../../services/robots.service';
import { PartsService } from '../../services/parts.service';
import { Part } from '../../models/part.model';
import { ROBOTS } from '../../mocks/robots.mocks';
import { PARTS } from '../../mocks/parts.mocks';

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



  constructor(
    private robotsService: RobotsService,
    private partsService: PartsService
  ) {
  }

  ngOnInit() {
    // this.setRobotsData(ROBOTS);
    // this.setPartsData(PARTS);

    this.robotsService.getRobots().subscribe((robots) => {
      this.setRobotsData(robots);
    });
    this.partsService.getParts().subscribe((parts) => {
      this.setPartsData(parts);
    });
  }

  setRobotsData(robots) {
    this.robots = robots;
    this.summary.robots = {
      howManyGPU: this.filterByGPU(),
      firstByName: this.sortByString(),
      firstByType: this.sortByString(),
      firstByAge: this.sortByNumber()
    };
  }

  setPartsData(parts) {
    this.parts = parts;
  }

  filterByGPU() {
    return null;
  }

  sortByNumber() {
    return null;
  }

  sortByString() {
    return null;
  }

}

