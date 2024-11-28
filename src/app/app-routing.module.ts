import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechileComponent } from './vechile/vechile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ProductComponent } from './product/product.component';
import { MailComponent } from './mail/mail.component';
import { BookComponent } from './book/book.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ProfileComponent } from './profile/profile.component';
import { AngularComponent } from './angular/angular.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [ 
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'event-registration',component:EventRegistrationComponent},
    {path:'emp-registration',component:EmpRegistrationComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'vechile',component: VechileComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'product',component:ProductComponent},
    {path:'mail',component:MailComponent},
    {path:'book',component:BookComponent},
    {path: 'weather',component:WeatherComponent},
    {path: 'blog', component:BlogComponent},
    {path:'imdb',component:ImdbComponent},
    {path: 'pokemon',component:PokemonComponent},
    {path: 'create-vehcile',component:CreateVehicleComponent},
    {path:'create-account',component:CreateAccountComponent},
    {path:'student', component:StudentComponent},
    {path:'create-student',component: CreateStudentComponent},
    {path:'profile',component:ProfileComponent},
    {path:'angular',component:AngularComponent},
    {path:'createaccount',component:CreateaccountComponent}
    
  

    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
