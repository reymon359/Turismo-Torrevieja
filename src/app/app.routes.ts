import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { LoginComponent } from "./components/login/login.component";

import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { NuevoUsuarioComponent } from "./components/usuarios/nuevo-usuario.component";
import { UsuarioComponent } from "./components/usuarios/usuario.component";

import { CarterasComponent } from './components/carteras/carteras.component';
import { CarteraComponent } from './components/carteras/cartera.component';
import { NuevaCarteraComponent } from './components/carteras/nueva-cartera.component';

import { ContactComponent } from "./components/contact/contact.component";
import { MensajesComponent } from "./components/mensajes/mensajes.component";



import { ChatbotsComponent } from './chatbots/chatbots.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
<<<<<<< HEAD
  { path: 'chatbots', loadChildren: 'app/chatbots/chatbots.module#ChatbotsModule' },
=======
  //rutas usuarios
>>>>>>> ramon
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
<<<<<<< HEAD
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
=======
  //rutas carteras
  { path: 'carteras', component: CarterasComponent },
  { path: 'nueva-cartera', component: NuevaCarteraComponent },
  { path: 'cartera/:id', component: CarteraComponent },

  { path: 'mensajes/:parame', component: MensajesComponent },
  //{ path: 'usuariosReloaded', component: UsuariosComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
>>>>>>> ramon
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
