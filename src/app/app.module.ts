import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { ServeComponent } from './serve/serve.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechileComponent } from './vechile/vechile.component';
import { HttpClientModule}  from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductComponent } from './product/product.component';
import { MailComponent } from './mail/mail.component';
import { BookComponent } from './book/book.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { SreateStudentComponent } from './sreate-student/sreate-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularComponent } from './angular/angular.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { CreateaccountComponent } from './createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    EmpRegistrationComponent,
    ServeComponent,
    EmployeeComponent,
    FlipkartComponent,
    VechileComponent,
    AccountsComponent,
    ProductComponent,
    MailComponent,
    BookComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    PokemonComponent,
    CreateVehicleComponent,
    CreateAccountsComponent,
    CreateAccountComponent,
    StudentComponent,
    SreateStudentComponent,
    CreateStudentComponent,
    ProfileComponent,
    AngularComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
