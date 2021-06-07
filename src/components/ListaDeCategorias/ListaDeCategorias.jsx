import {Component} from "react";

export default class ListaDeCategorias extends Component{
    constructor(props) {
        super(props);
        this.state = {categorias:[this.props.categorias.categorias]};
        this._novascategorias = this._novascategorias.bind(this);
    }

    componentDidMount() { this.props.categorias.inscrever(this._novascategorias);}

    componentWillUnmount() {this.props.categorias.desiscrever(this._novascategorias);}

    _novascategorias(categorias){this.setState({...this.state,categorias});}

    _handlerTeclado(evento){if(evento.key === "Enter") this.props.addCategoria(evento.target.value);}

    render() {
        return(
            <section>
                <h3>Categorias existentes</h3>
                <ul>
                    {this.state.categorias.map((categoria,index) => {
                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
                <input type="text" placeholder="adicione uma nova categoria" onKeyUp={this._handlerTeclado.bind(this)}/>
            </section>
        );
    }
}