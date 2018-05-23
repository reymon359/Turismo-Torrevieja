import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { AuthGuardService, AuthGuardUsuariosService, AuthGuardRolesService,
AuthGuardCarterasService, AuthGuardEventosService, AuthGuardEspaciosService,
AuthGuardProveedoresService } from './services/auth-guard.service';

//Menu no login
import { HomeComponent }        from "./components/home/home.component";
import { AboutComponent }       from "./components/about/about.component";
import { LoginComponent }       from "./components/login/login.component";
import { ChatbotsComponent }    from './chatbots/chatbots.component';
import { ContactComponent }     from "./components/contact/contact.component";

//Menu login
import { PerfilComponent }      from "./components/perfil/perfil.component";
import { UsuariosComponent }    from "./components/usuarios/usuarios.component";
import { CarterasComponent }    from './components/carteras/carteras.component';
import { CarteraComponent }     from './components/carteras/cartera.component';
import { ExpedientesComponent } from './components/expedientes/expedientes.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { RolesComponent }       from './components/roles/roles.component';
import { EspaciosComponent }    from './components/espacios/espacios.component';

//Otros
import { MensajesComponent }    from "./components/mensajes/mensajes.component";
import { DifusionComponent }    from "./components/difusion/difusion.component";



//TODO eliminar

import { ExpedienteComponent } from './components/expedientes/expediente.component';
import { NuevoExpedienteComponent } from './components/expedientes/nuevo-expediente.component';

//TODO Fin eliminar



const app_routes: Routes = [
  //Menu no login
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chatbots', loadChildren: 'app/chatbots/chatbots.module#ChatbotsModule' },

  //Menu Login
  { path: 'perfil', canActivate:[AuthGuardService], component: PerfilComponent },
  { path: 'perfil/:id', canActivate:[AuthGuardService], component: PerfilComponent }, //TODO ver si es necesario
  { path: 'usuarios', canActivate:[AuthGuardService,AuthGuardUsuariosService], component: UsuariosComponent },
  { path: 'roles', canActivate:[AuthGuardService,AuthGuardRolesService], component: RolesComponent },
  { path: 'difusion/:id', canActivate:[AuthGuardService,AuthGuardRolesService], component: DifusionComponent },
  { path: 'carteras', canActivate:[AuthGuardService,AuthGuardCarterasService], component: CarterasComponent },
  { path: 'cartera/:id', canActivate:[AuthGuardService,AuthGuardCarterasService], component: CarteraComponent },
  { path: 'expedientes', canActivate:[AuthGuardService,AuthGuardEventosService], component: ExpedientesComponent },
  { path: 'espacios', canActivate:[AuthGuardService,AuthGuardEspaciosService], component: EspaciosComponent },
  { path: 'proveedores', canActivate:[AuthGuardService,AuthGuardProveedoresService], component: ProveedoresComponent },


  //Otros
  { path: 'mensajes/:parame', component: MensajesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },


  //TODO ELIMINAR
  //{ path: 'usuariosReloaded', component: UsuariosComponent },
  { path: 'nuevo-expediente', component: NuevoExpedienteComponent },
  { path: 'expediente/:id', component: ExpedienteComponent },
  //TODO Fin eliminar

  //{ path: 'usuariosReloaded', component: UsuariosComponent }, //TODO que es esto???
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
