import { ThrowStmt } from '@angular/compiler';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MoviesService} from '../movies.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private MoviesService:MoviesService, private route:Router) { }
  movies :any;
  films
  cats;
  uniqueCats;
  queryParams
  ngOnInit(): void {
 
 this.activatedRoute.queryParams.subscribe(values => {
  this.queryParams = values; 
  if(this.queryParams.q){
    this.searchMovies(this.queryParams.q )
    console.log(values);
    
  }else{
    this.getMovies();
  }
  });
  }
  getMovies(){
    this.MoviesService.getData().toPromise().then( res => {
      this.movies = res;
      this.films = res["movies"]
      let result = this.movies.movies.map(a => a.genres);
      this.cats = result
      var merged = [].concat.apply([], this.cats);
      this.uniqueCats = merged.filter(function(item, pos) {
        return merged.indexOf(item) == pos;
    });
    })  
  }
  searchMovies(q){
    this.MoviesService.search(q).toPromise().then( res => {
      this.movies = res;
      this.films = res["movies"]
      let result = this.movies.movies.map(a => a.genres);
      this.cats = result
      var merged = [].concat.apply([], this.cats);
      this.uniqueCats = merged.filter(function(item, pos) {
        return merged.indexOf(item) == pos;
    });
    })  
  }
 
  returnMovieCat(arrayOfCats,cat){
    if(arrayOfCats.find(item => item === cat)){
      return true;
    }else{
      return false;
    }
  }
}
