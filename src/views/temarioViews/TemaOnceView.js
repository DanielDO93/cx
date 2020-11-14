import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
// import diez from "../../assets/img/cx/diez.png";
import ReactPlayer from 'react-player'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaOnceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>CX</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>
                  Experiencia al cliente (CX)
                </b>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" className=" mt-3">
              {/* <h3>
                Conceptos básicos asociados al CX:
              </h3> */}
              <p>
                Hagamos un ejercicio…<br />
                Vemos el siguiente video y responde: <br />
                ¿Es ésta una acción de marketing o una acción de experiencia al cliente?
              </p>
            </Col>
          </Row>
          <Row className="centrado-fila">
            {/* <Col xs="12" md="3">
              <div className="centrado-fila">
                <img
                  src={diez}
                  style={{ width: 300 }}
                  alt="diez"
                  className="img-fluid  animated  bounceInRight delay-1s"
                />
              </div>
            </Col> */}
            <Col xs="12" md="9" className="centrado-fila" >
              <div className="cajaRoja pb-3">
                <ReactPlayer url='https://www.youtube.com/watch?v=CTdgt_Xtc7M&feature=emb_title'
                  controls={true}
                  playing
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
