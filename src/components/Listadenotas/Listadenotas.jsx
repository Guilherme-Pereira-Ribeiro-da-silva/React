import React, {Component} from "react";
import CardDeNotas from "../CardDeNotas";
import './style.css';

export default class Listadenotas extends Component{
    constructor() {
        super();
        this.state = {notas: []};
    }

    componentDidMount() {this.props.notas.inscrever(this._novasnotas.bind(this));}

    _novasnotas(notas){this.setState({...this.state,notas});}

    //O construtor passando os props é criado por padrão
    render() {
        return (
            <ul className="Listadenotas">
                {this.state.notas.map((nota,index) => {
                    return(
                        <div key={index}>
                            <CardDeNotas categorias={nota.categoria} titulo={nota.titulo} mensagem={nota.texto} id={index} deletePost={this.props.deletarCard}/>
                        </div>
                    );
                })}
            </ul>
        );
    }
}