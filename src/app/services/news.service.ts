import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
 
  todaynews(){

    return fetch(`https://newsapi.org/v2/everything?q=news&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewsgen(){

    return fetch(`https://newsapi.org/v2/everything?q=general&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewsspo(){

    return fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewsent(){

    return fetch(`https://newsapi.org/v2/everything?q=entertainment&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewsbus(){

    return fetch(`https://newsapi.org/v2/everything?q=business&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewstec(){

    return fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }

  getnewshea(){

    return fetch(`https://newsapi.org/v2/everything?q=health&apiKey=30d0cc21eb3c48d8b27de24cf4e8c070`)
  }
}

