import { Component, OnInit } from '@angular/core';
import { MyserviveService, Category } from '../myservive.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

 // obj1: any;
 cid:number;
 private sub:any;
  constructor(private myservice: MyserviveService, private router: Router,private route:ActivatedRoute) {
  //  this.obj1=this.myservice.updateCatMethod();
   }

  ngOnInit(): any {
    let sub=this.route.params.subscribe(
      params=>{
        this.cid=+params['id'];
      }
    )
    console.log(sub);
    console.log(this.cid);
  }
  onUpdateCat(uc:Category):any{
    console.log(this.cid);
    console.log(uc.categoryName);
    this.myservice.onUpdateCategory(this.cid,uc.categoryName).subscribe(data=>{
      
    });
    return this.router.navigate(['/ListCategories']);
  }

}
