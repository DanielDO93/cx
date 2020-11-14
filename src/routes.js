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

const Actividad2View = React.lazy(() => import('./views/temarioViews/Actividad2View'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },
  { path: '/temarioViews/ObjetivoView', name: 'Objetivo', component: ObjetivoView },
  { path: '/temarioViews/TemarioView', name: 'Indice', component: TemarioView },
  { path: '/temarioViews/IntroduccionView', name: 'Introducción', component: IntroduccionView },

  { path: '/temarioViews/TemaDosView', name: '¿Qué significa experiencia al cliente? ', component: TemaDosView },
  { path: '/temarioViews/TemaTresView', name: '¿Qué significa experiencia al cliente?', component: TemaTresView },
  { path: '/temarioViews/TemaCuatroView', name: '¿Qué significa experiencia al cliente?', component: TemaCuatroView },
  { path: '/temarioViews/TemaCincoView', name: '¿Qué significa experiencia al cliente?', component: TemaCincoView },
  { path: '/temarioViews/TemaSeisView', name: '¿Qué significa experiencia al cliente?', component: TemaSeisView },
  { path: '/temarioViews/TemaSieteView', name: '¿Qué significa experiencia al cliente?', component: TemaSieteView },
  { path: '/temarioViews/TemaOchoView', name: '¿Qué significa experiencia al cliente?', component: TemaOchoView },
  { path: '/temarioViews/TemaNueveView', name: '¿Qué significa experiencia al cliente?', component: TemaNueveView },
  { path: '/temarioViews/TemaDiezView', name: '¿Qué significa experiencia al cliente?', component: TemaDiezView },
  { path: '/temarioViews/TemaOnceView', name: '¿Qué significa experiencia al cliente?', component: TemaOnceView },


  { path: '/temarioViews/TemaTreceView', name: '¿Por qué es importante para las empresas? ', component: TemaTreceView },
  { path: '/temarioViews/TemaCatorceView', name: '¿Por qué es importante para las empresas?', component: TemaCatorceView },
  { path: '/temarioViews/TemaQuiceView', name: '¿Por qué es importante para las empresas?', component: TemaQuiceView },
  { path: '/temarioViews/TemaDieciseisView', name: '¿Por qué es importante para las empresas?', component: TemaDieciseisView },

  { path: '/temarioViews/TemaDieciochoView', name: '¿Por qué es importante para las empresas? ', component: TemaDieciochoView },
  { path: '/temarioViews/TemaDiecinueveView', name: '¿Por qué es importante para las empresas?', component: TemaDiecinueveView },
  { path: '/temarioViews/TemaVienteView', name: '¿Por qué es importante para las empresas?', component: TemaVienteView },
  { path: '/temarioViews/TemaVientiunoView', name: '¿Por qué es importante para las empresas?', component: TemaVientiunoView },

  { path: '/temarioViews/Actividad2View', name: 'Actividad', component: Actividad2View },

];


export default routes;
