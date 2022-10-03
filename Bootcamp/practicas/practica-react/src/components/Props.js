import {Component} from "react";

class PruebaProps extends Component {
    render(){
        const {nombre} = this.props;
        const {apellido} = this.props;
        return(
            <h2> Les saluda {nombre} {apellido}</h2>
        ) 
    }
}

export default PruebaProps