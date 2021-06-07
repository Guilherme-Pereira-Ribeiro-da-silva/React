import React, {Component} from "react";

import Listadenotas from './components/Listadenotas';
import FormInserirNotas from "./components/FormInserirNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";

class App extends Component {
    constructor() {
        super();
        this.categorias = new Categorias();
        this.notas = new Notas();
    }

    render() {
        return (
            <section>
                <FormInserirNotas categorias={this.categorias} criarNovoCard={this.notas.adicionarNota.bind(this.notas)} deletarTodasNotas={this.notas.deletarTodasasNotas.bind(this.notas)}/>
                <main>
                    <ListaDeCategorias categorias={this.categorias} addCategoria={this.categorias.addCategoria.bind(this.categorias)}/>
                    <Listadenotas notas={this.notas} deletarCard={this.notas.deletarNota.bind(this.notas)}/>
                </main>
            </section>
        );
    }
}

export default App;
