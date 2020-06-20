import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(
    private dataservice: DataService,
    private CartService: CartService
    ) { }

  addProductToCart(selectedMovie: Movie) {
    this.CartService.addItemToCart(selectedMovie);
    console.log('Movie with id: ' + selectedMovie.Id + ' has been added')
  }

  ngOnInit(): void {
    this.dataservice.theData.subscribe((data: Movie[]) => {
       this.movies = data });
    this.dataservice.getData();

    this.dataservice.selectedDataSource.subscribe((movie: Movie) => {
      this.addProductToCart(movie);
    });
  }

}
