import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  login(userName:string, password:string){
    if(userName === "latheef" && password ==="123")
    {
      return 200
    } else {
      return 400
    }
  }

}
