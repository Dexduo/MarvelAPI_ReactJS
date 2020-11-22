import React, { Component } from 'react'
import api from '../api'

import './charactersList.css'

class Characters extends Component {

    state = {
        names: [],
        images: []
    }
    //O ESTADO FOI CRIADO PARA ARMAZENAR OS NOMES E FOTOS DOS PERSONAGENS RESPECTIVAMENTE


    async componentWillMount() {
        if(!this.state.loading){
            const response = await api.get('')
            const characters = response.data
            //A PARTIR DAQUI OS DADOS JA FORAM REQUISITADOS
            
            const names = []
            const images = []
            
            characters.data.results.forEach(e => {
                //AQUI FILTRAREMOS OS DADOS PARA PEGARMOS APENAS NOME E IMAGEM DOS PERSONAGENS
                if(((e.thumbnail.path + '.' + e.thumbnail.extension).indexOf('image_not_available')) === -1 ){
                    //ESSA CONDICIONAL EVITA QUE NOS DÊ UM RETORNO SEM IMAGEM DISPONÍVEL
                    names.push(e.name)
                    images.push(e.thumbnail.path + '.' + e.thumbnail.extension)
                }
            })
            this.setState({ loading: true, names, images})
        }
    }

    renderChars(char) {
        //ESSE METODO É UTILIZADO PARA CRIAR A DIV CONTENDO O PERSONAGEM E SEU NOME
        return(
            <div className="char">
                <img src={char.image} />
                <p>{char.name}</p>
            </div>
        )
    }

    render() {
        const names = this.state.names
        const images = this.state.images

        class Char {
            constructor(name, image) {
                this.name = name;
                this.image = image;
            }
        }

        const char_list = []

        //A CLASSE CHAR E A LISTA CHAR_LISTA FORAM USADAS PARA CRIAR E ARMAZENAR OS OBJETOS "PERSONAGENS", RESPECTIVAMENTE

        for(let i=0; i< names.length; i++) {
            //AQUI APENAS INTANCIEI CADA PERSONAGEM E GUARDEI NA LISTA CHAR_LIST
            char_list.push(new Char(names[i], images[i]))
        }

        return(
            //ESSA DIV É ONDE FICAM TODOS OS PERSONAGENS RENDERIZADOS
            <div className="charslist">
                {char_list.map( this.renderChars )}
            </div>
        )
    
    }
}

export default Characters

