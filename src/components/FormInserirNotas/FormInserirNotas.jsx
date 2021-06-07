import React, {Component} from "react";

export default class FormInserirNotas extends Component{
    constructor(props) {
        super(props);
        this.titulo = "";
        this.mensagem = "";
        this.categoria = this.props.categorias[0];
        this.state = {categorias:[this.props.categorias.categorias]};
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {this.props.categorias.inscrever(this._novasCategorias)}
    componentWillUnmount() {this.props.categorias.desiscrever(this._novasCategorias);}


    _novasCategorias(categorias){this.setState({...this.state,categorias});}

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudancaTextArea(evento){
        evento.stopPropagation();
        this.mensagem = evento.target.value;
    }

    _handleMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    _criarNovoCard(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNovoCard(this.titulo,this.mensagem,this.categoria);
    }

    render() {
        return(
            <form onSubmit={this._criarNovoCard.bind(this)}>
                <input type="text" onInput={this._handleMudancaTitulo.bind(this)}/>
                <br/><br/>
                <textarea placeholder="escreva sua nota" rows={10} onInput={this._handleMudancaTextArea.bind(this)}></textarea>
                <br/><br/>
                <button type="submit">Insira sua nota</button>
                <button type="reset" onClick={this.props.deletarTodasNotas}>Deletar todas as notas</button>
                <select onChange={this._handleMudancaCategoria.bind(this)}>
                    {this.state.categorias.map((categoria,index) => {
                       return <option value={categoria} key={index}>{categoria}</option>
                    })}
                </select>
            </form>
        );
    }
}