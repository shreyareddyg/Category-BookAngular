import { Component, OnInit } from '@angular/core';
import { MyserviveService, Category } from '../myservive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-all-category',
  templateUrl: './list-of-all-category.component.html',
  styleUrls: ['./list-of-all-category.component.css']
})
export class ListOfAllCategoryComponent implements OnInit {
  mess: string;
  message: string
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
  /*
  update(updateCat: Category) {
    this.myservice.updateCategory(updateCat);
    this.router.navigate(['/UpdateCategory']); //updating the question
    console.log('end of list all test update button')
  }*/
  update(cid: number) {
    this.myservice.updateCategory(cid);
    this.router.navigate(['/UpdateCategory',cid]); //updating the question
    console.log('end of list all test update button')
  }
  delete(categoryId: number) {
    var retval = confirm("Are you sure want to delete the Category with ID: " + categoryId + " ?");
    if (retval == true) {
      this.myservice.removeCategory(categoryId).subscribe(

        (result) => {

          if (result != null) {
            this.cat = this.cat.filter(category => category.categoryId != categoryId)
          }
        },
        (err) => {
          this.message = err.message;
        }

      );
    }
    else {
      return false;
    }
  }


}
