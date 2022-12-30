import { NgModule } from '@angular/core';
//este comomModule me perimite usar ngif ngfor ngelse
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  //cuando se va al app-component se establece el router oulet y me redirecciona a pages component 
    {
      path: '',component: PagesComponent,
      //para crear las rutas hijas le decimos que son hijas de pagescomponent
      children: [
        {path: 'dashboard',component: DashboardComponent},
        {path: 'progress',component: ProgressComponent},
        {path: 'grafica1',component: Grafica1Component},  
        {path: '',redirectTo: '/dashboard', pathMatch: 'full'}, 
      ]
    },
   
    {path: 'login',component: LoginComponent},
    {path: 'register',component: RegisterComponent},
   
   
    {path: '**', component:NopagesfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    //forRoot es para rutas principales y forchilde es apra subrutas o rutas hijas
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
