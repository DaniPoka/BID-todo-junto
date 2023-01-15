import { Component } from 'react';


class Datos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edad: this.props.edad
        }
    }
    cambiarEdad = () => this.setState({ edad: this.state.edad + 1 })
    render() {
        const { nombre, apellido, edad, color } = this.props
        return (<div>
            <h1>{apellido}, {nombre}</h1>
            <p>Age: {this.state.edad}</p>
            <p>Hair Color: {color}</p>
            <button onClick={this.cambiarEdad}> Birthday button for {nombre}</button>
        </div>);
    }
}

export default Datos;