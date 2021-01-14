import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private MoviesService:MoviesService, private route: ActivatedRoute,) { }
  movies;
  currentMovie;
  movieId
  color = "red";
  loaded = false;
  ngOnInit(): void {
    this.MoviesService.getData().subscribe(data => {
      this.movies = data ;
      this.movieId = this.route.snapshot.paramMap.get("id");
      this.currentMovie = this.movies.movies.find(item => item.slug == this.movieId)
      console.log(this.currentMovie);
      this.loaded = true;
    })
  }
  onRatingChanged(){
    
  }
}
