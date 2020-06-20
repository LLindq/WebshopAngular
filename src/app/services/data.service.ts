import { Injectable } from '@angular/core';
import { IDataService } from './IDataService';
import { Subject } from 'rxjs';
import Movie from '../models/movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {
  selectedDataSource = new Subject<Movie>();
  theData: Subject<Movie[]> = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  getData(): void {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {
      const moviesApi: Movie[] = data.map(movie => {
        const ourOwnMovieObject = new Movie();
        ourOwnMovieObject.Id = movie.id;
        ourOwnMovieObject.Name = movie.name;
        ourOwnMovieObject.Price = movie.price;
        ourOwnMovieObject.ImageUrl = movie.imageUrl;
        return ourOwnMovieObject;
      })
      this.theData.next(moviesApi);
    })
  }
}
