import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import Movie from 'src/app/models/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: number;
  movie: Movie;
  constructor(private route: ActivatedRoute,
              private dataservice: DataService,
              private CartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
      console.log(this.id)
    })
    this.dataservice.theData.subscribe((data: Movie[]) => { this.movie = data.find(e => {
      return e.Id == this.id;
    })
    console.log(this.movie);
  });
    this.dataservice.getData();
  }

  addProductToCart(selectedMovie: Movie) {
    this.CartService.addItemToCart(selectedMovie);
    console.log(selectedMovie.Id + 'Has been added')
  }

}
