// After creating class - set type to be class 'Robot'
import { Robot } from '../models/robot.model';

export const ROBOTS: Robot[] = [
  {
    id: 1,
    age: 15,
    name: 'Dave',
    type: 'droid',
    parts: [{
      partId: 101,
      condition: 35
    }]
  },
  {
    id: 2,
    age: 16,
    name: 'Dave2',
    type: 'android',
    parts: [{
      partId: 104,
      condition: 90
    }, {
      partId: 101,
      condition: 90
    }]
  },
  {
    id: 3,
    age: 17,
    name: 'Dave3',
    type: 'droid',
    parts: [{
      partId: 102,
      condition: 23
    }
    ]
  },
  {
    id: 4,
    age: 18,
    name: 'Dave4',
    type: 'droid',
    parts: [
      {
        partId: 103,
        condition: 99
      },
      {
        partId: 102,
        condition: 76
      },
      {
        partId: 105,
        condition: 87
      }]
  }
];

