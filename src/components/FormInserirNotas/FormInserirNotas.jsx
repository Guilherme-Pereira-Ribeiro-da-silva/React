import React, {Component} from "react";

export default class FormInserirNotas extends Component{
    constructor(props) {
        super(props);
        this.titulo = "";
        this.mensagem = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTextArea(evento){
        evento.stopPropagation();
        this.mensagem = evento.target.value;
    }

    _criarNovoCard(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNovoCard(this.titulo,this.mensagem);
    }

    render() {
        return(
            <form onSubmit={this._criarNovoCard.bind(this)}>
                <input type="text" onInput={this._handleMudancaTitulo.bind(this)}/>
                <br/><br/>
                <textarea placeholder="escreva sua nota" rows={10} onInput={this._handleMudancaTextArea.bind(this)}></textarea>
                <br/><br/>
                <button type="submit">Insira sua nota</button>
            </form>
        );
    }
}