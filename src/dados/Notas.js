export default class Notas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo,texto,categoria){
        this.notas.push(new Nota(titulo,texto,categoria));
        this.notificar();
    }

    deletarNota(id){
        this.notas.splice(id,1);
        this.notificar();
    }

    deletarTodasasNotas(){
        this.notas = [];
        this.notificar();
    }

    inscrever(funcao){this._inscritos.push(funcao);}

    desiscrever(funcao){this._inscritos = this._inscritos.filter(f => f !== funcao)}

    notificar(){this._inscritos.forEach(func => {func(this.notas)});}
}

class Nota{
    constructor(titulo,texto,categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}

