import React, {Component} from "react";
import './style.css';

export default class CardDeNotas extends Component{
    _deletarPost(){
        this.props.deletePost(this.props.titulo);
    }

    render() {
        return(
            <section>
                <li className="CardDeNotas">
                    <header>
                        <h3>{this.props.titulo}</h3>
                    </header>
                    <p>{this.props.mensagem}</p>
                </li>
                <button onClick={this._deletarPost.bind(this)}>deletar post</button>
                <hr/>
            </section>
        );
    }
}