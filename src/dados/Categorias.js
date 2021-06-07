export default class Categorias{
    constructor() {
        this.categorias = ["sem categoria"];
        this._inscritos = [];
    }

    addCategoria(nome) {
        this.categorias.push(nome);
        this.notificar();
    }

    inscrever(funcao){this._inscritos.push(funcao);}

    desiscrever(funcao){this._inscritos = this._inscritos.filter(f => f !== funcao)}

    notificar(){this._inscritos.forEach(func => {func(this.categorias)});}
}