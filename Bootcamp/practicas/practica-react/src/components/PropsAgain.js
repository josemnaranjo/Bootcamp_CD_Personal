import {Component} from 'react'

class PropsNumberTwo extends Component {
    render(){
        return (<h3>Y {this.props.nombre} {this.props.apellido}</h3>)
    }
}

export default PropsNumberTwo