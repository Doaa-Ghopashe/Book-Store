import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BooksComponent } from './components/books/books.component';
import { CatrgoriesComponent } from './components/catrgories/catrgories.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { TagsContainerComponent } from './components/tags-container/tags-container.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserReviewsComponent } from './components/user-reviews/user-reviews.component';
import { SearchPipe } from './pipes/search.pipe';
import { HeaderComponent } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule}   from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';    
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    BooksComponent,
    CatrgoriesComponent,
    AuthorsComponent,
    BookDetailsComponent,
    TagsContainerComponent,
    CategoryDetailsComponent,
    AuthorDetailsComponent,
    UserAccountComponent,
    UserBooksComponent,
    UserReviewsComponent,
    SearchPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
