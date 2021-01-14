import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {MoviesService} from './movies.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CodeSubmit';
  searchForm = new FormGroup({
    q: new FormControl(""),

  });
  constructor(private MoviesService:MoviesService, private route:Router) { }
  search(){
    console.log(this.searchForm.value);
    this.route.navigateByUrl("/home?q="+this.searchForm.value.q)
  }
}
