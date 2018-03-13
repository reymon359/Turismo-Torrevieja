import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTING } from "./app.routes"

// servicios
import { UsuariosService }  from "./services/usuarios.service";
import { RolesService }  from "./services/roles.service";
import { CarterasService }  from "./services/carteras.service";
import { ProveedorService }  from "./services/proveedor.service";
// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, TokenService, DatosUsuarioService, LogueadoService, TareasService } from './services/index';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuarios/usuario.component';
import { NuevoUsuarioComponent } from './components/usuarios/nuevo-usuario.component';

import { ContactComponent } from './components/contact/contact.component';

import {IdsPipe} from './components/pipes/ids.pipe';
import { KeysPipe } from './components/pipes/keys.pipe';


import { MensajeComponent } from './components/shared/mensaje/mensaje.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';

import { CarterasComponent } from './components/carteras/carteras.component';
import { CarteraComponent } from './components/carteras/cartera.component';
import { NuevaCarteraComponent } from './components/carteras/nueva-cartera.component';


import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProveedorComponent } from './components/proveedores/proveedor.component';
import { ProveedorEditarComponent } from './components/proveedores/proveedor-editar.component';
import { NuevoProveedorComponent } from './components/proveedores/nuevo-proveedor.component';

import { RolesComponent } from './components/roles/roles.component';
import { NuevoRolComponent } from './components/roles/nuevo-rol.component';
import { RolComponent } from './components/roles/rol.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NuevaTareaComponent } from './components/tareas/nueva-tarea.component';
import { TareaEditarComponent } from './components/tareas/tarea-editar.component';
import { CarterasFilterPipe } from './components/pipes/carteras-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    UsuariosComponent,
    UsuarioComponent,
    ContactComponent,
    ProveedoresComponent,
    ProveedorComponent,
    ProveedorEditarComponent,
    NuevoProveedorComponent,
    IdsPipe,
    KeysPipe,
    NuevoUsuarioComponent,
    MensajeComponent,
    MensajesComponent,
    CarterasComponent,
    CarteraComponent,
    NuevaCarteraComponent,
    RolesComponent,
    RolComponent,
    NuevoRolComponent,
    PerfilComponent,
    TareasComponent,
    NuevaTareaComponent,
    TareaEditarComponent,
    CarterasFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UsuariosService,
    CarterasService,
    TareasService,
    RolesService,
    AlertService,
    ProveedorService,
    AuthenticationService,
    TokenService,
    DatosUsuarioService,
    NavbarComponent,
    HomeComponent,
    LogueadoService

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
