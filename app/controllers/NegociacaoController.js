class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)
        this._quantidade = $('[data-quantidade]')
        this._valor = $('[data-valor]')
        this._data = $('[data-data]')
        this._listaNegociacoes = new ListaNegociacoes()
        Object.freeze(this)
    }

    adiciona(event) {
        event.preventDefault()

        let negotiation = new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value,
        )

        this._listaNegociacoes.adiciona(negotiation)

        console.log(this._listaNegociacoes.negociacoes)
    }
}