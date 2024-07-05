import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css'
})
export class SingleMovieComponent {
  type = "";
  id = "";
  url = "";
  movies:any;
  movie:any;
  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if(this.type === 'trending')
    {
      this.url = 'http:/assets/data/trending-movies.json';
    }else if(this.type === 'theater'){
      this.url = 'http:/assets/data/theatre-movies.json';
    }else if(this.type === 'popular'){
      this.url = 'http:/assets/data/popular-movies.json';
    }
    this.getMovieDetails();
  }

  getMovieDetails(){
    this.http.get(this.url).subscribe((movie) => {
      this.movies = movie;
      let index = this.movies.findIndex((movie:any) => movie.id == this.id)
      if(index > -1){
        this.movie = this.movies[index];  
      }
      
    })
  }

}
