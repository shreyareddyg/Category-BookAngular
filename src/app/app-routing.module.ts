import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfAllCategoryComponent } from './list-of-all-category/list-of-all-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { BooksByCategoryComponent } from './books-by-category/books-by-category.component';


const routes: Routes = [
  {path:'ListCategories',component:ListOfAllCategoryComponent},
  {path:'UpdateCategory/:id',component:UpdateCategoryComponent},
  {path:'CreateCategory',component:CreatecategoryComponent},
  {path:'userNavbar',component:UserheaderComponent},
  {path:'bookpage/:id',component:BooksByCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
