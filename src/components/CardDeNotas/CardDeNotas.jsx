import React, {Component} from "react";
import './style.css';
import deletar from '../../assets/img/deletar.svg';

export default class CardDeNotas extends Component{

    apagarPost(){
        const index = this.props.id;
        this.props.deletePost(index)
    }

    render() {
        return(
            <section>
                <li className="CardDeNotas">
                    <header>
                        <h3 className="d-inline-block">{this.props.titulo}</h3>
                     <img onClick={this.apagarPost.bind(this)} className="d-inline-block" src={deletar} alt="ícone deletar" title="ícone deletar"/>
                    </header>
                    <p>Categoria: {this.props.categorias}</p>
                    <p>{this.props.mensagem}</p>
                </li>
                <hr/>
            </section>
        );
    }
}