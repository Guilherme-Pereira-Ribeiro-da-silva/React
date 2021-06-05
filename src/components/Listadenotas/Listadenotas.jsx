import React, {Component} from "react";
import CardDeNotas from "../CardDeNotas";
import './style.css';

export default class Listadenotas extends Component{


    deletarPost(titulo){
        this.props.deletarCard(titulo);
    }

    //O construtor passando os props é criado por padrão
    render() {
        return (
            <ul className="Listadenotas">
                {this.props.notas.map((nota,index) => {
                    return(
                        <div key={index}>
                            <CardDeNotas titulo={nota.titulo} mensagem={nota.texto} id={index} deletePost={this.deletarPost.bind(this)}/>
                        </div>
                    );
                })}
            </ul>
        );
    }
}