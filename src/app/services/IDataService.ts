import { Subject } from 'rxjs';
import Movie from '../models/movie';

export interface IDataService {
  getData():void;
  theData: Subject<Movie[]>;
}


