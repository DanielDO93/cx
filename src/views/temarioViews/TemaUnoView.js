import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> CX</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" className="">
              <div className="bgUno centrado-fila">
                <div className="cajaRoja">
                  <h1 className=" " style={{fontSize:"30px"}}>
                    <b>
                      1. ¿Qué significa experiencia al cliente?
                    </b>
                  </h1>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
