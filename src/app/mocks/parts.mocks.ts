
// After creating class - set type to be class 'Part'
// export const PARTS: Part[] = {...}
import { Part } from '../models/part.model';

export const PARTS: Part[] = [
  {
    cpu: 'i5',
    engine: 'GPU',
    id: 101,
    name: 'Lidar',
    type: 'Sensors'
  },
  {
    cpu: 'Core 2 Duo',
    engine: 'GPU',
    id: 102,
    name: 'Cytron 13A',
    type: 'Cameras'
  },
  {
    cpu: 'Core M',
    engine: 'Volta',
    id: 103,
    name: 'LIDAR-Lite 3',
    type: 'Control Systems'
  },
  {
    cpu: 'Merom-L',
    engine: 'Quadro',
    id: 104,
    name: 'Lidar',
    type: 'hydraulics'
  },
  {
    cpu: 'Penryn',
    engine: 'Tesla',
    id: 105,
    name: 'Lynxmotion',
    type: 'Pneumatics'
  }
];
