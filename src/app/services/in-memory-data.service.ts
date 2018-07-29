import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PARTS } from '../mocks/parts.mocks';
import { ROBOTS } from '../mocks/robots.mocks';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'parts' : PARTS,
      'robots' : ROBOTS
    };
  }
}
