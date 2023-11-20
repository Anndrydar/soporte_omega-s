import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresa';
import { ServicioAutorizarService } from 'src/app/servicios/servicio-autorizar.service';
import Swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-panel-autorizar',
  templateUrl: './panel-autorizar.component.html',
  styleUrls: ['./panel-autorizar.component.css']
})
export class PanelAutorizarComponent implements OnInit {
  p: number = 1;
  solicitudes: any;  
  nombre_empresa = '';
  nombre: String = 'Anndry';


  empresa: Empresa = {
    ruc: '',
    email: '',
    telefono: '',
    direccion: '',
    nombre_empresa: '',
    contacto: '',
    fecha_ingreso: '',
    ciudad: '',
    password: '',
    idplan: 0
  }

constructor(private servicio: ServicioAutorizarService
  ){}
  ngOnInit(): void {
    this.verEmpresas();
}

buscarPorNombre(){
  this.servicio.getSolicitudes(this.nombre_empresa).subscribe(
    res=>{
      this.solicitudes = res;
    }
  )
}


verEmpresas(){
  this.servicio.getEmpresas().subscribe(
    res=>{
     this.solicitudes = res;
    }
  )
}

aceptacion(idempresa: Number,
  ruc: String, email: String, telefono: String, direccion: String,
  nombre_empresa: String, contacto: String, fecha_ingreso: String, ciudad: String,
  password: String, plan: Number){

let acepta = this.empresa = {
  ruc: ruc,
  email: email,
  telefono: telefono,
  direccion: direccion,
  nombre_empresa: nombre_empresa,
  contacto: contacto,
  fecha_ingreso: fecha_ingreso,
  ciudad: ciudad,
  password: password,
  idplan: plan
}
this.servicio.crearSolicitud(acepta).subscribe(
  res=>{
     this.success()
     this.verEmpresas()
  }
)

const idem = idempresa.toString()
this.servicio.eliminarEmpresa(idem).subscribe()
}

rechazo(idempresa: Number){
const idem = idempresa.toString()
this.servicio.eliminarEmpresa(idem).subscribe(
  res=>{
    this.advertencia()
    this.verEmpresas()
  }
)
}

success(){
  Swal.fire({
    position: 'top-end',
    width: 400,
    icon: 'success',
    title: 'Empresa aceptada',
    showConfirmButton: false,
    timer: 1500
  })
}


advertencia(){
  Swal.fire({
    position: 'top-end',
    width:400,
    icon: 'error',
    title: 'Empresa rechazada',
    showConfirmButton: false,
    timer: 1500
  })
}



exportarpdf(ruc: String,descripcion:String,
  email: String, telefono: String, direccion: String,
  nombre_empresa: String, contacto: String, ciudad: String){
 
  const pdfDocu: any = {
    pageSize: 'LEGAL',
    pageMargins: [ 20, 25, 20, 25 ],
    content: [
      {
        canvas:[
        ]
      },
      {
        text: 'SAO’S Sistemas Administrativos OMEGA’S',
        width: 375,
        absolutePosition : { x :50,y :40 },
        style: 'header',
      },
      {
        text: 'Tecnología Administrativa',
        width: 375,
        absolutePosition : { x :420,y :40 },
        style: 'subtitulo',
      },
      {
        text: 'Estimado: ' + nombre_empresa,
        absolutePosition : { x :50,y :90 },
        style: [
          {
            style:'normal_negrita'
          },
          {
            style:'header'
          }
        ],
        margin: [0,20,0,10],
      },
      {
        text: 'Nos complace ofrecerle nuestros servicios técnicos mensuales y respaldo en la nube, así como \n nuestra asistencia remota y telefónica para satisfacer las necesidades de su empresa. Nuestro \n objetivo es proporcionarle soluciones confiables y eficientes para garantizar el funcionamiento \n óptimo de sus sistemas informáticos.',
        absolutePosition : { x :50,y :130 },
      },
      {
        text:'Nuestro paquete de servicios técnicos mensuales incluye:',
        absolutePosition : { x :50,y :190 },
        margin: [0,20,0,10],
        style: 'titulo_servicio'
      },
      {
        ul:	['Mantenimiento preventivo y correctivo: Realizaremos un mantenimiento periódico de sus \n equipos y sistemas para asegurarnos de que estén en buen estado de funcionamiento. Además,\n estaremos disponibles para solucionar cualquier problema técnico que pueda surgir.\n',
            'Respaldo en la nube: Le ofrecemos un espacio seguro en la nube donde podrá almacenar y \n respaldar sus datos importantes. Esto le proporcionará tranquilidad al saber que su información está \n protegida y respaldada de manera regular.\n',
            'Asistencia remota y telefónica: Nuestro equipo de técnicos altamente capacitados estará a su \n disposición para brindarle asistencia remota y telefónica. Podrá contar con nuestra ayuda experta en \n cualquier momento que necesite resolver problemas o tener consultas relacionadas con sus sistemas.\n',
        ],
        style: 'normal',
        absolutePosition : { x :50,y :210},
        margin: [0,20,0,10],
      },
      {
        text: 'El costo mensual de nuestros servicios técnicos y respaldo en la nube es de un '+ descripcion +  '.Este monto cubrirá todas las actividades mencionadas anteriormente y le brindará acceso \n a un servicio confiable y profesional.',
        absolutePosition : { x :50,y :330},
        margin: [0,20,0,10],},
        {
          text: 'Además, adjuntamos un documento en el que se estipulan los detalles sobre el espacio en la nube \n que ofrecemos para aquellos clientes que solo requieren este servicio. Este documento contiene \n información relevante, como la capacidad de almacenamiento y los términos y condiciones para su \n uso.',
          absolutePosition : { x :50,y :380},
          margin: [0,20,0,10],
        },
        {
          text: 'Agradecemos la oportunidad de ofrecer nuestros servicios y esperamos poder trabajar con usted \n para satisfacer sus necesidades tecnológicas. Si tiene alguna pregunta o desea discutir los detalles de \n nuestra oferta, no dude en ponerse en contacto con nosotros. Estamos disponibles para programar \n una reunión y brindarle información adicional.',
          absolutePosition : { x :50,y :440},
          margin: [0,20,0,10],
        },
        {
          text: 'Atentamente,',
          absolutePosition : { x :50,y :550},
          margin: [0,20,0,10],
        },
        {
          text: ''+ contacto,
          absolutePosition : { x :50,y :590},
          margin: [0,20,0,10],
        },
        {
          text: ''+ nombre_empresa,
          absolutePosition : { x :50,y :610},
          margin: [0,20,0,10],
        },
        {
          text: ''+ ruc,
          absolutePosition : { x :50,y :630},
          margin: [0,20,0,10],
        },
        {
          text: ''+ email,
          absolutePosition : { x :50,y :650},
          margin: [0,20,0,10],
        },
        {
          text: ''+ telefono,
          absolutePosition : { x :50,y :670},
          margin: [0,20,0,10],
        },
        {
          text: ''+ direccion,
          absolutePosition : { x :50,y :690},
          margin: [0,20,0,10],
        },
        {
          text: ''+ ciudad,
          absolutePosition : { x :50,y :710},
          margin: [0,20,0,10],
        },
        {
          text: 'Manta. omega_manta@hotmail.com',
          alignment: 'center',
          absolutePosition : { x :50,y :950 },
          margin: [0,20,0,10],
        },
        {
          text: 'Manta. Calle 307 Av. 217 Telf.: 0984891400 (MO) – 0985144781 – 052927592',
          alignment: 'center',
          absolutePosition : { x :50,y :965 },
          margin: [0,20,0,10],
        }
    ],
    styles: {
      header: {
        fontSize: 14,
        bold: true
      },
      subtitulo: {
        fontSize: 12,
        bold: true
      },
      titulo: {
        fontSize: 11,
        bold: true
      },
      bigger: {
        fontSize: 15,
        italics: true,
      },
      normal: {
        fontSize: 11,
        normal: true,
      },
      normal_negrita: {
        fontSize: 10,
        bold: true,
      },
      titulo_servicio: {
         fontSize: 12,
         bold: true
      }
    }
  }
  const documento = pdfMake.createPdf(pdfDocu);
  documento.open();
}
}
