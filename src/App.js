import React, {Component} from "react";

import Listadenotas from './components/Listadenotas';
import FormInserirNotas from "./components/FormInserirNotas/";
class App extends Component {
    constructor() {
        super();
        this.state = {
            notas: []
        };
    }

    criarNovoCard(titulo, texto){
        const NovaNota = {titulo,texto};
        const ArrayNotas = [...this.state.notas,NovaNota];
        const novoEstado = {
            notas: ArrayNotas
        }
        this.setState(novoEstado);
    }

    deletarCard(titulo){
        let notas = this.state.notas.filter((value) => {
            return value.titulo !== titulo;
        });
        const novoEstado = {
            notas: notas
        }

        this.setState(novoEstado);
    }

    render() {
        return (
            <section>
                <FormInserirNotas criarNovoCard={this.criarNovoCard.bind(this)}/>
                <Listadenotas notas={this.state.notas} deletarCard={this.deletarCard.bind(this)}/>
            </section>
        );
    }
}

export default App;
