import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  trandingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router){
    
  }

  ngOnInit(){
    this.getTrandingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }

  getTrandingMovies(){
    this.http.get('http:/assets/data/trending-movies.json').subscribe((movies)=>{
    this.trandingMovies = movies;
    })
  }

  getTheatreMovies(){
    this.http.get('http:/assets/data/theatre-movies.json').subscribe((movies)=>{
    this.theatreMovies = movies;
    })
  }

  getPopularMovies(){
    this.http.get('http:/assets/data/popular-movies.json').subscribe((movies)=>{
    this.popularMovies = movies;
    })
  }

  rating = 3.14;

	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

  movieDetails(type:string, id:any){
    this.router.navigate(['/singleMovie/',type,id])
  }

}
