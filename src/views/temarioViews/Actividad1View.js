import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import swal from "sweetalert"
import AuthService from '../../services/AuthService'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Actividad1View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(state) {
    super(state)
    this.Auth = new AuthService()
    this.state = {
      radio1: '',
      radio2: '',
      radio3: '',
      radio4: '',
      radio5: '',
      radio6: '',
      texto1: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'cx-2',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 2, con id: " + respuesta[0].id,
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
        text: "No se guardo la actividad: 2, Intenta de nuevo. ",
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
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2>Evaluación 1: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>
                    Responde las siguientes preguntas de acuerdo los principales conceptos de la Experiencia al
                    cliente
                </p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <Col xs="12" sm="11" md="10">
                      <Form>
                        <div
                          className="cajaGris mt-3"
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                1.	Cuando mencionamos… “Gracias a un buen servicio al cliente la percepción de la
                                empresa mejorará y, en consecuencia, muchas más personas estarán dispuestas y
                                comprometidas con ser embajadores de la empresa”… ¿A qué acción nos referimos?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio1"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a)	Generar embajadores de marca.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio1"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b)	Personalizar y segmentar la atención.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio1"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c)	Aumentar el ciclo de vida del cliente.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio1"
                                  value="d"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>d)	Reducir las fricciones con la empresa.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio1"
                                  value="e"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>e)	Generar insights para mejorar la utilización del servicio.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>

                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                2.	Cuando mencionamos… “Al implementar un buen servicio al cliente se evitará las
                                fricciones y, en general, mejorará la experiencia, por lo que se reducirá está
                                molesta estadística y, en cambio, se prolongará una muy positiva: la tasa de
                                retención”… ¿A qué acción nos referimos?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio2"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a)	Generar embajadores de marca.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio2"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b)	Personalizar y segmentar la atención</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio2"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c)	Aumentar el ciclo de vida del cliente</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio2"
                                  value="d"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>d)	Reducir las fricciones con la empresa.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio2"
                                  value="e"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>e)	Generar insights para mejorar la utilización del servicio.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>


                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                3.	Cuando mencionamos… “Uno de los beneficios del servicio al cliente es que cuenta
                                con procesos y prácticas que le permiten mejorarse a sí mismo”? … ¿A qué acción nos
                                referimos?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio3"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a)	Generar embajadores de marca.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio3"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b)	Personalizar y segmentar la atención</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio3"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c)	Aumentar el ciclo de vida del cliente</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio3"
                                  value="d"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>d)	Reducir las fricciones con la empresa.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio3"
                                  value="e"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>e)	Generar insights para mejorar la utilización del servicio.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>


                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                4.	¿A que nos referimos con la característica de una estrategia de CX
                                “Encontrar necesidades”?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio4"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a)	Al entender a los clientes podrás y anticiparte a sus necesidades,
                                 antes de que este sepa que las tiene.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio4"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b)	Si entiendes qué necesitan, podrás ofrecer productos, servicios y
                                experiencias que deleiten a los clientes de manera inesperada para ellos.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio4"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c)	Estudia y analiza las diferentes interacciones que tu empresa tiene
                                con su público. Hablamos de reacciones, comentarios, acciones, comportamientos y
                                 opiniones.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>


                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                5.	Dentro de las características de una estrategia de CX, ¿qué se menciona al
                                referirnos a “Satisfacer necesidades”?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio5"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a)	Al entender a los clientes podrás y anticiparte a sus necesidades,
                                 antes de que este sepa que las tiene.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio5"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b)	Si entiendes qué necesitan, podrás ofrecer productos, servicios y
                                experiencias que deleiten a los clientes de manera inesperada para ellos.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio5"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c)	Estudia y analiza las diferentes interacciones que tu empresa tiene
                                con su público. Hablamos de reacciones, comentarios, acciones, comportamientos y
                                opiniones.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>



                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <FormGroup tag="fieldset" row className="text-justify">
                            <legend className="col-form-label ">
                              <b>
                                6.	Dentro de las características de una estrategia de CX, ¿qué se menciona al
                                referirnos a “Conocer la percepción del cliente”?
                               </b>{" "}
                              <span style={{ color: "red" }}>*</span>
                            </legend>
                            <Col sm={12}>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio6"
                                  value="a"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check> a.	Al entender a los clientes podrás y anticiparte a sus necesidades,
                                 antes de que este sepa que las tiene.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio6"
                                  value="b"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>b.	Si entiendes qué necesitan, podrás ofrecer productos, servicios y
                                experiencias que deleiten a los clientes de manera inesperada para ellos.</Label>
                              </FormGroup>
                              <FormGroup check>
                                <Input
                                  type="radio"
                                  name="radio6"
                                  value="c"
                                  onChange={this.onChange.bind(this)}
                                />
                                <Label check>c.	Estudia y analiza las diferentes interacciones que tu empresa tiene
                                con su público. Hablamos de reacciones, comentarios, acciones, comportamientos y
                                opiniones.</Label>
                              </FormGroup>
                            </Col>
                          </FormGroup>
                        </div>


                        <div
                          className="cajaGris mt-3 "
                          style={{ backgroundColor: "#d5d4d8", paddingLeft:"35px",paddingRight:"35px" }}
                        >
                          <Col xs="12">
                            <Label for="texto1">
                              <b>7.	Menciona y explica tres ventajas de la Experiencia al cliente:  </b>
                            </Label>
                            <Input
                              type="textarea"
                              name="texto1"
                              id="texto1"
                              value={this.state.texto1}
                              onChange={this.onChange.bind(this)}
                            />
                          </Col>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Actividad1View
