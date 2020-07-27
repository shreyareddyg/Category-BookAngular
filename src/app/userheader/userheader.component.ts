import { Component, OnInit } from '@angular/core';
import { MyserviveService, Category } from '../myservive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  cat: Category[];
  constructor(private myservice: MyserviveService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getCategory().subscribe(

      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.cat = response;
    console.log(this.cat);
  }
  Category(id:number){
     this.router.navigate(['bookpage',id]);
  }

}
