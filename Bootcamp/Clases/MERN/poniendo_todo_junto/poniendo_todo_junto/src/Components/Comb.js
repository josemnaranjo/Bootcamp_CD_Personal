import React, {Component} from 'react'

class Combi extends Component {
    constructor(props){
        super(props);
        this.state = {
            edad1: 29,
            edad2: 33
        }
    }
    addYear1(){
        this.setState(
            {edad1:this.state.edad1 + 1})
            console.log(this)
    }
    addYear2(){
        this.setState(
            {edad2:this.state.edad2 + 1})
            console.log(this)
    }
    render() {
        const {nombre1} = this.props;
        const {nombre2} = this.props;
        const {apellido1} = this.props;
        const {apellido2} = this.props;
        const {colorPelo1} = this.props;
        const {colorPelo2} = this.props;
        return(
            <div>
                <div>
                    <h1>{apellido1} , {nombre1}</h1>
                    <p>Edad: {this.state.edad1} </p>
                    <p>Color de pelo: {colorPelo1}</p>
                    <button onClick ={this.addYear1.bind(this)}> Felíz cumpleaños {nombre1} {apellido1}</button>
                </div>

                <div>
                    <h1>{apellido2} , {nombre2}</h1>
                    <p>Edad: {this.state.edad2} </p>
                    <p>Color de pelo: {colorPelo2}</p>
                    <button onClick ={this.addYear2.bind(this)}> Felíz cumpleaños {nombre2} {apellido2}</button>
                </div>
            </div>

        )
    }
}

export default Combi;



//this.addYear.bind(this)
//La primera parte "this.addYear1/2" indica que se ejecute el metodo "addYear1/2" definido más arriba.
//bind() es un método integrado de React que se usa para pasar argumentos cuando creamos componentes basados en clases
//bind() acepta dos parámetros: "this" y cualquier otro argumento (varios dentro de un arreglo). This pasa la referencia 
//de donde se ejecutó la función, en otras palabras estoy diciendo que el metodo addYear1/2 está unido a la referencia donde se ejecutó,
//que en este caso es la clase "Combi". Y, al estar unidas, se modifica la clase "Combi" al hacer click
