import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));
const ObjetivoView = React.lazy(() => import('./views/temarioViews/ObjetivoView'));
const TemarioView = React.lazy(() => import('./views/temarioViews/TemarioView'));
const IntroduccionView = React.lazy(() => import('./views/temarioViews/IntroduccionView'));


const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));
 const TemaTresView = React.lazy(() => import('./views/temarioViews/TemaTresView'));
 const TemaCuatroView = React.lazy(() => import('./views/temarioViews/TemaCuatroView'));
 const TemaCincoView = React.lazy(() => import('./views/temarioViews/TemaCincoView'));
 const TemaSeisView = React.lazy(() => import('./views/temarioViews/TemaSeisView'));
 const TemaSieteView = React.lazy(() => import('./views/temarioViews/TemaSieteView'));
 const TemaOchoView = React.lazy(() => import('./views/temarioViews/TemaOchoView'));
 const TemaNueveView = React.lazy(() => import('./views/temarioViews/TemaNueveView'));
 const TemaDiezView = React.lazy(() => import('./views/temarioViews/TemaDiezView'));
 const TemaOnceView = React.lazy(() => import('./views/temarioViews/TemaOnceView'));

const TemaTreceView = React.lazy(() => import('./views/temarioViews/TemaTreceView'));
 const TemaCatorceView = React.lazy(() => import('./views/temarioViews/TemaCatorceView'));
 const TemaQuiceView = React.lazy(() => import('./views/temarioViews/TemaQuiceView'));
 const TemaDieciseisView = React.lazy(() => import('./views/temarioViews/TemaDieciseisView'));

const TemaDieciochoView = React.lazy(() => import('./views/temarioViews/TemaDieciochoView'));
 const TemaDiecinueveView = React.lazy(() => import('./views/temarioViews/TemaDiecinueveView'));
 const TemaVienteView = React.lazy(() => import('./views/temarioViews/TemaVienteView'));
 const TemaVientiunoView = React.lazy(() => import('./views/temarioViews/TemaVientiunoView'));

const TemaVeintitresView = React.lazy(() => import('./views/temarioViews/TemaVeintitresView'));
const TemaVeinticuatroView = React.lazy(() => import('./views/temarioViews/TemaVeinticuatroView'));
const TemaVeinticincoView = React.lazy(() => import('./views/temarioViews/TemaVeinticincoView'));

const TemaVeintisieteView = React.lazy(() => import('./views/temarioViews/TemaVeintisieteView'));
const TemaVeintiochoView = React.lazy(() => import('./views/temarioViews/TemaVeintiochoView'));
const TemaVeintinueveView = React.lazy(() => import('./views/temarioViews/TemaVeintinueveView'));
const TemaTreintaView = React.lazy(() => import('./views/temarioViews/TemaTreintaView'));
const TemaTreintayunoView = React.lazy(() => import('./views/temarioViews/TemaTreintayunoView'));
const TemaTreintaydosView = React.lazy(() => import('./views/temarioViews/TemaTreintaydosView'));
const TemaTreintaytresView = React.lazy(() => import('./views/temarioViews/TemaTreintaytresView'));
const TemaTreintaycuatroView = React.lazy(() => import('./views/temarioViews/TemaTreintaycuatroView'));


const Actividad2View = React.lazy(() => import('./views/temarioViews/Actividad2View'));
const Actividad1View = React.lazy(() => import('./views/temarioViews/Actividad1View'));

const Formulario2View = React.lazy(() => import('./views/temarioViews/formulario2View'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/ObjetivoView', name: 'Objetivo', component: ObjetivoView },
  { path: '/temarioViews/TemarioView', name: 'Indice', component: TemarioView },
  { path: '/temarioViews/IntroduccionView', name: 'Introducción', component: IntroduccionView },

  { path: '/temarioViews/TemaDosView', name: 'Experiencia al cliente (CX) > P1 ', component: TemaDosView },
   { path: '/temarioViews/TemaTresView', name: 'Experiencia al cliente (CX) > P2', component: TemaTresView },
   { path: '/temarioViews/TemaCuatroView', name: 'Experiencia al cliente (CX) > P3', component: TemaCuatroView },
   { path: '/temarioViews/TemaCincoView', name: 'Experiencia al cliente (CX) > P4', component: TemaCincoView },
   { path: '/temarioViews/TemaSeisView', name: 'Experiencia al cliente (CX) > P5', component: TemaSeisView },
   { path: '/temarioViews/TemaSieteView', name: 'Experiencia al cliente (CX) > P6', component: TemaSieteView },
   { path: '/temarioViews/TemaOchoView', name: 'Experiencia al cliente (CX) > P7', component: TemaOchoView },
   { path: '/temarioViews/TemaNueveView', name: 'Experiencia al cliente (CX) > P8', component: TemaNueveView },
   { path: '/temarioViews/TemaDiezView', name: 'Experiencia al cliente (CX) > P9', component: TemaDiezView },
   { path: '/temarioViews/TemaOnceView', name: 'Experiencia al cliente (CX) > P10', component: TemaOnceView },


  { path: '/temarioViews/TemaTreceView', name: '¿Por qué es importante para las empresas hablar de CX? > P1 ', component: TemaTreceView },
   { path: '/temarioViews/TemaCatorceView', name: '¿Por qué es importante para las empresas hablar de CX? > P2', component: TemaCatorceView },
   { path: '/temarioViews/TemaQuiceView', name: '¿Por qué es importante para las empresas hablar de CX? > P3', component: TemaQuiceView },
   { path: '/temarioViews/TemaDieciseisView', name: '¿Por qué es importante para las empresas hablar de CX? > P4', component: TemaDieciseisView },

  { path: '/temarioViews/TemaDieciochoView', name: 'Ventajas de una Experiencia al Cliente > P1 ', component: TemaDieciochoView },
   { path: '/temarioViews/TemaDiecinueveView', name: 'Ventajas de una Experiencia al Cliente > P2', component: TemaDiecinueveView },
   { path: '/temarioViews/TemaVienteView', name: 'Ventajas de una Experiencia al Cliente > P3', component: TemaVienteView },
   { path: '/temarioViews/TemaVientiunoView', name: 'Ventajas de una Experiencia al Cliente > P4', component: TemaVientiunoView },

  { path: '/temarioViews/TemaVeintitresView', name: 'Factores que causan una mala experiencia al cliente > P1 ', component: TemaVeintitresView },
  { path: '/temarioViews/TemaVeinticuatroView', name: 'Factores que causan una mala experiencia al cliente > P2 ', component: TemaVeinticuatroView },
  { path: '/temarioViews/TemaVeinticincoView', name: 'Características de una estrategia de Experiencia al Cliente  ', component: TemaVeinticincoView },



  { path: '/temarioViews/TemaVeintisieteView', name: 'Características de una estrategia de Experiencia al Cliente > P1', component: TemaVeintisieteView },
  { path: '/temarioViews/TemaVeintiochoView', name: 'Características de una estrategia de Experiencia al Cliente > P2', component: TemaVeintiochoView },
  { path: '/temarioViews/TemaVeintinueveView', name: 'Características de una estrategia de Experiencia al Cliente > P3', component: TemaVeintinueveView },
  { path: '/temarioViews/TemaTreintaView', name: 'Características de una estrategia de Experiencia al Cliente > P4', component: TemaTreintaView },
  { path: '/temarioViews/TemaTreintayunoView', name: 'Características de una estrategia de Experiencia al Cliente > P5', component: TemaTreintayunoView },
  { path: '/temarioViews/TemaTreintaydosView', name: 'Características de una estrategia de Experiencia al cliente', component: TemaTreintaydosView },
  { path: '/temarioViews/TemaTreintaytresView', name: 'Características de una estrategia de Experiencia al Cliente > P6', component: TemaTreintaytresView },
  { path: '/temarioViews/TemaTreintaycuatroView', name: 'Características de una estrategia de Experiencia al Cliente > P7', component: TemaTreintaycuatroView },


  
  { path: '/temarioViews/Actividad2View', name: 'Actividad 1', component: Actividad2View },
  { path: '/temarioViews/Actividad1View', name: 'Actividad 2', component: Actividad1View },


{ path: '/temarioViews/formulario2View', name: 'Evaluación del curso', component: Formulario2View },

  
];


export default routes;
