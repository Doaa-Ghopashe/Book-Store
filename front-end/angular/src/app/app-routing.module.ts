import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CatrgoriesComponent } from './components/catrgories/catrgories.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';

const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch : "full"},
  {path : "home", component : HomeComponent},
  {path : "user/register", component : RegistrationComponent},
  {path : "user/login", component : LoginComponent},
  {path : "categories", component : CatrgoriesComponent},
  {path : "books", component : BooksComponent},
  {path : "authors", component : AuthorsComponent},
  {path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
