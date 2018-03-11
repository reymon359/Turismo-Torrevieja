import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ExpedienteInterfaz }  from "../../interfaces/expediente.interface";
import { ActividadInterface }  from "../../interfaces/actividad.interface";
import { TareaInterface }  from "../../interfaces/tareas.interface";
import { ContratoInterface }  from "../../interfaces/contrato.interface";
import { Usuario }  from "../../interfaces/usuario.interface";
import { EspacioInterface }  from "../../interfaces/espacio.interface";
import { ProveedorInterface }  from "../../interfaces/proveedor.interface";
import { AlertService, AuthenticationService,PeticionesCrudService,LogueadoService } from '../../services/index';
@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  id:string;
  errorActualizarItem = false;
  errorMensaje:string[] = [];
  itemActualizado = false;
  archivoImg:ImageData = null;
  // archivoImg:File = null;
  // permisosCambiados:string[]=[];
  // auxPermisos:string[]=[];

  public expediente:ExpedienteInterfaz={
    identificador:0,
    actor:0,
    aforo:0,
    avance:"",
    cartera:0,
    coordinador:"",
    detalle:"",
    evento:0,
    fechaFin:null,
    fechaInicio:null,
    imagen:null,
    nombreExpediente:"",
    precio:0,
    titulo:"",
  };

  public actividades:ActividadInterface[];
  public tareas:TareaInterface[];
  public contratos:ContratoInterface[];
  public users:Usuario[];
  public espacio:EspacioInterface[];
  public proveedor:ProveedorInterface[];

  constructor(  private _ItemService: PeticionesCrudService,
                private router:Router,
                private route:ActivatedRoute,//esto es para pasar como parametro
                public  logueadoService: LogueadoService
              )
  {
      this.logueadoService.comprobarLogueado();

      this.route.params.subscribe(parametros=>{
            this.id = parametros['id'];

            //COGEMOS EL EXPEDIENTE
            this._ItemService.getItem(0,this.id,-1,-1).then(
              res => {
                this.expediente = res as ExpedienteInterfaz;
              }
            );

            //COGEMOS LAS ACTIVIDADES
            this._ItemService.getItem(101,this.id,-1,-1).then(
              res => {
                this.actividades = res as ActividadInterface[];
              }
            );

            //COGEMOS LAS TAREAS
            this._ItemService.getItem(102,this.id,-1,-1).then(
              res => {
                this.tareas = res as TareaInterface[];
              }
            );

            //COGEMOS LOS CONTRATOS
            this._ItemService.getItem(103,this.id,-1,-1).then(
              res => {
                this.contratos = res as ContratoInterface[];
              }
            );

            //COGEMOS LOS USUARIOS
            this._ItemService.getItem(5,-1,-1,-1).then(
              res => {
                this.users = res as Usuario[];
              }
            );

            //COGEMOS LOS ESPACIOS
            this._ItemService.getItem(6,-1,-1,-1).then(
              res => {
                this.espacio = res as EspacioInterface[];
              }
            );

            //COGEMOS LOS PROVEEDORES
            this._ItemService.getItem(7,-1,-1,-1).then(
              res => {
                this.proveedor = res as ProveedorInterface[];
              }
            );
      });
    }

  ngOnInit() {
  }

  //CREAR NUEVAS PLANTILLA
  crearPlantillaAct(){
    var a:ActividadInterface;
    a={
      capacidadMinimo:null,
      capacidadMaximo:null,
      espacio:null,
      expediente:+this.id,
      fechaFinal:null,
      fechaInicio:null,
      identificador:null,
      nombreActividad:null,
      HoraInicio:null,
      HoraFinal:null,
      detalleEntrada:null,
      precioEntrada:null,
    };
    this.actividades.push(a);
  }

  crearPlantillaCon(){
    var c:ContratoInterface;
    c={
      archivo:null,
      clase:null,
      expediente:+this.id,
      identificador:null,
      nombreContrato:null,
      precio:null,
      proveedor:null,
      tiempo:null,
      usuario:null,
    };
    this.contratos.push(c);
  }

  crearPlantillaTar(){
    var t:TareaInterface;
    t={
      expediente:+this.id,
      finalizado:null,
      identificador:null,
      nombreTarea:null,
      usuario:null,
    };
    this.tareas.push(t);
  }

  //ELIMINAR ITEMS
  eliminarItem(a, i, index){
  console.log(index);
    if (i != null){
      var mensaje = "Va a eliminarse de forma definitiva.\n"+
                    "¿Continuar?";
      if(confirm(mensaje)){
        this._ItemService.eliminarItem(a,i,-1).then( res=>{
          if(a==1){ this.actividades.splice(index,1); }
          else if(a==3){ this.contratos.splice(index,1); }
          else if(a==2){ this.tareas.splice(index,1); }
        });
      }
    }
    else{
      if(a==1){
        this.actividades.splice(index,1);
      }
      else if(a==3){
        this.contratos.splice(index,1);
      }
      else if(a==2){
        this.tareas.splice(index,1);
      }
    }
  }

  //ACTUALIZAR Y GUARDAR NUEVOS ITEMS
  guardarCambiosExp(){
    this._ItemService.crearItem(0,this.expediente)
    .then( res=> {
      // console.log("ACTUALIZAR IMG");
      // console.log(this.archivoImg);
      // if(this.archivoImg != null && this.archivoImg != undefined){
        // this._ItemService.subirFile(201,this.id,this.archivoImg)
        //   .then( res=>{ alert("Actualizado correctamente."); })
        //   .catch( (er) => { alert("Expediente actualizado correctamente, a excepción de la imagen.");
        //                     console.log( er.toString()) })
      // }
      // else{
         alert("Actualizado correctamente.");
      // }
    })
    .catch( (err) => { alert("Se ha producido un error inesperado.\nNo se ha podido actualizar el expediente.");
                       console.log( err.toString()) })
    // this._ItemService.actualizarItem(0,this.id,this.expediente,-1)
    //   .then( res=> {
    //     console.log("ACTUALIZAR IMG");
    //     console.log(this.archivoImg);
    //     if(this.archivoImg != null && this.archivoImg != undefined){
    //       // this._ItemService.subirFile(201,this.id,this.archivoImg)
    //       //   .then( res=>{ alert("Actualizado correctamente."); })
    //       //   .catch( (er) => { alert("Expediente actualizado correctamente, a excepción de la imagen.");
    //       //                     console.log( er.toString()) })
    //     }
    //     else{
    //        alert("Actualizado correctamente.");
    //     }
    //   })
    //   .catch( (err) => { alert("Se ha producido un error inesperado.\nNo se ha podido actualizar el expediente.");
    //                      console.log( err.toString()) })
  }

  crearModificarActConTar(i,a,index){
    console.log(a);
    if(a.identificador != null){
      this._ItemService.actualizarItem(i,a.identificador,a,-1)
        .then( res=> { alert("Actualizado correctamente."); })
        .catch( (err) => { console.log( err.toString() ); })
    }
    else{
      this._ItemService.crearItem(i,a)
        .then( res=> {
          if(i==1){
            this.actividades[index] = res as ActividadInterface;
          }
          else if(i==3){
            this.contratos[index] = res as ContratoInterface;
          }
          else if(i==2){
            this.tareas[index] = res as TareaInterface;
          }
          alert("Creado correctamente."); })
        .catch( (err) => { console.log( err.toString() ); })
    }
  }

  cargarImg(files: FileList){
    // this.archivoImg = files.item(0);
    console.log(files.item(0));
    // this.archivoImg = files.item(0);
    // this.expediente.imagen=this.archivoImg;
    //   console.log(this.archivoImg);
  }
}
