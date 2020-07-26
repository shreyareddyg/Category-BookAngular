import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { ListOfAllCategoryComponent } from './list-of-all-category/list-of-all-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { OrderByNamePipe } from './order-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListOfAllCategoryComponent,
    UpdateCategoryComponent,
    HeaderComponent,
    FooterComponent,
    CreatecategoryComponent,
    OrderByNamePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
