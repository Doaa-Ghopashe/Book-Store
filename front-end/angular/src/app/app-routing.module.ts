import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CatrgoriesComponent } from './components/catrgories/catrgories.component';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { MyBoosComponent } from './components/my-boos/my-boos.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch : "full"},
  {path : "home", component : HomeComponent},
  {path : "user/register", component : RegistrationComponent},
  {path : "user/login", component : LoginComponent},
  {path : "categories", component : CatrgoriesComponent,canActivate:[AuthService]},
  {path : "books", component : BooksComponent,canActivate:[AuthService]},
  {path : "authors", component : AuthorsComponent,canActivate:[AuthService]},
  {path : "mybook", component : MyBoosComponent,canActivate:[AuthService]},
  {path : "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
