import { NgModule } from '@angular/core';
//este comomModule me perimite usar ngif ngfor ngelse
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  //cuando se va al app-component se establece el router oulet y me redirecciona a pages component 
    
   
    {path: '',redirectTo: '/dashboard', pathMatch: 'full'}, 
    {path: '**', component:NopagesfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    //forRoot es para rutas principales y forchilde es apra subrutas o rutas hijas
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
