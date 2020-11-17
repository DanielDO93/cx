import React, { Component } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { Row, Col, Button, } from 'reactstrap'
import swal from "sweetalert"

import Nota from './notasReferencia'
import AuthService from '../../../services/AuthService'
import API_CCS from '../../../services/API_CCS'
const API = new API_CCS()

class Arrastrables extends Component {
  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      list: [
        {
          id: '1',
          name: 'a)	Emociones ',
        },
        {
          id: '2',
          name: 'b)	Recuerdos ',
        },
        {
          id: '3',
          name: 'c)	Comportamientos ',
        },
        {
          id: '4',
          name: 'd)	Resultados de negocio',
        },

      ],
      list2: [],
      list3: [],
      list4: [],
      list5: [],

      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'CX-1',
    }
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 1, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });

      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 1, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <Row className="  centrado-fila ">
        <Col xs="6">
          <div className="card bg-fondo-btn2">
            <h6 className="text-center text-white mt-2">Concepto clave </h6>
            <div className="centrado-fila bgImgTabla">
              <div >
                <ReactSortable
                  list={this.state.list}
                  setList={(newState) => this.setState({ list: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list.map((item) => (
                    <div key={item.id} style={{ marginBottom: '30px' }}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>


              <div >
                <ReactSortable
                  list={this.state.list2}
                  setList={(newState) => this.setState({ list2: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list2.map((item) => (
                    <div key={item.id} >
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="6">
          <div className="card   pl-4 pr-4">
            <h6 className=" mt-2">¡Arrastra aqui!</h6>

            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white "
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list2}
                  setList={(newState) => this.setState({ list2: newState })}
                  group="shared-group-name"
                >
                  {this.state.list2.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  las percepciones que tienen los clientes sobre la marca, que condicionan la forma en que 
                  desarrollará una relación con ella.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list3}
                  setList={(newState) => this.setState({ list3: newState })}
                  group="shared-group-name"
                >
                  {this.state.list3.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  lo que se genera luego de aplicar todo lo mencionado y que sustenta la viabilidad de la estrategia
                  en general.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list4}
                  setList={(newState) => this.setState({ list4: newState })}
                  group="shared-group-name"
                >
                  {this.state.list4.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Se trata de sensaciones que experimentan los usuarios, como felicidad, nostalgia, empatía y más.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list5}
                  setList={(newState) => this.setState({ list5: newState })}
                  group="shared-group-name"
                >
                  {this.state.list5.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Generando emociones y recuerdos en los usuarios se estimulan nuevos hábitos en ellos, por ejemplo,
                  de consumo.
                </p>
              </Col>
            </Row>


          </div>
        </Col>
        <Col xs="12" className=" mt-3  centrado-fila">
          <div className="centrado-fila mt-3">
            <Button
              color="primary"
              onClick={this.onSave.bind(this)}
            >
              Enviar
                          </Button>
          </div>
        </Col>
        <Col xs="12" className=" mt-3 centrado-fila ">
          <Nota
            title1="Instrucción:"
            content1="Arrastre  las Letras correctas al recuadro."
          />
        </Col>

      </Row>
    )
  }
}

export default Arrastrables
