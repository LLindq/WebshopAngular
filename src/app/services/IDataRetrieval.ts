import { Subject } from 'rxjs';
import Orders from 'src/app/models/orders';

export interface IDataRetrieval {
  getDatabase():void;
  theDatabase: Subject<Orders[]>;
}


