import { Component, OnInit } from '@angular/core';
import { MyserviveService, Book } from '../myservive.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-by-category',
  templateUrl: './books-by-category.component.html',
  styleUrls: ['./books-by-category.component.css']
})
export class BooksByCategoryComponent implements OnInit {

  book: Book[];
  private sub:any;
  Cid:number;
  constructor(private myservice: MyserviveService,private route:ActivatedRoute) { }

  ngOnInit(){
    let sub=this.route.params.subscribe(
      params=>{
        this.Cid=+params['id'];
      }
    )
    console.log(this.Cid);
    this.myservice.getCategoryByID(this.Cid).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    console.log(this.Cid);
  }
  handleSuccessfulResponse(response) {
    this.book = response;
    console.log(this.book);
  }

}
