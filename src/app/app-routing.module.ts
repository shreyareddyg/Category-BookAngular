import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfAllCategoryComponent } from './list-of-all-category/list-of-all-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';


const routes: Routes = [
  {path:'ListCategories',component:ListOfAllCategoryComponent},
  {path:'UpdateCategory/:id',component:UpdateCategoryComponent},
  {path:'CreateCategory',component:CreatecategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
