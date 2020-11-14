import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row, Table } from "reactstrap";

class TemarioView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Índice</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <Table bordered className="cajaA1">
                <thead style={{ background: "#c52d49" }} className="cajaA1">
                  <tr>
                    <th>
                      {" "}
                      <p
                        className="text-white text-center"
                        style={{ marginBottom: "0px" }}
                      >
                        Experiencia al Cliente
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{ background: "#c52d49" }}
                  className="cajaA1 text-white"
                >
                  <tr>
                    <td style={{ width: "25%", verticalAlign: "middle" }}>
                      <b> 1. ¿Qué significa experiencia al cliente? </b>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>2. ¿Por qué es importante para las empresas hablar de CX?</b>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>3. Ventajas de una experiencia al cliente </b>

                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>4. Factores que causan una mala experiencia al cliente </b>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      <b>Características de una estrategia de experiencia al cliente</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemarioView;
