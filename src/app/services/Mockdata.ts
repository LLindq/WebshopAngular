import { IDataService } from './IDataService';
import  Movie  from 'src/app/models/movie';
import { Subject } from 'rxjs';


export class MockMovieData implements IDataService {
  selectedDataSource = new Subject<Movie>();
  theData: Subject<Movie[]> = new Subject<Movie[]>();

  getData(): void {
    this.theData.next(
      [{ Name: 'Star Wars 1', Id: 1,
      Price: 100, ImageUrl: 'www.google.se'},
      { Name: 'Star Wars 2', Id: 2,
      Price: 100, ImageUrl: 'www.google.se'},
      { Name: 'Star Wars 3', Id: 3,
      Price: 100, ImageUrl: 'www.google.se'},
      { Name: 'Star Wars 4', Id: 4,
      Price: 100, ImageUrl: 'www.google.se'},
      { Name: 'Star Wars 5', Id: 5,
      Price: 100, ImageUrl: 'www.google.se'}]
    );
  }

}
