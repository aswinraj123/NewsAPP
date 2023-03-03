import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {



constructor(private service:NewsService){}

  

todaynews:any=[];

title:any



getnews(){
  this.service.todaynews().then(res=>res.json()).then(data=>this.todaynews=data.articles)

}

generalnews(){
  this.service.getnewsgen().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}



sportsnews(){
  this.service.getnewsspo().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}

entertainmentnews(){
  this.service.getnewsent().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}

businessnews(){
  this.service.getnewsbus().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}

technologynews(){
  this.service.getnewstec().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}

healthnews(){
  this.service.getnewshea().then(res=>res.json()).then(data=>this.todaynews=data.articles)
}




    

}

                                                                                                                                                                                    