import React, {Component} from 'react';
import Collapsible from './components/Collapsible'
import './App.scss';

class App extends Component {
  constructor (props){
    super(props)

    this.state={
      data: {
        "version": "v0.0.0",
        "palettes": [
          {
            "name": "Tardis Blue",
            "from": "Doctor Who",
            "colors": [
              "003A6E",
              "9B9A99",
              "000000",
              "FFFFFF",
              "6F4500"
            ]
          },
          {
            "name": "Millenium Falcon",
            "from": "Star Wars",
            "colors": [
              "B6B6BE",
              "D8D7D4",
              "413A31",
              "746C66",
              "A32D2C"
            ]
          },
          {
            "name": "Battlestar Galactica",
            "from": "Battlestar Galactica",
            "colors": [
              "080F19",
              "1B2E3F",
              "364269",
              "3D6973",
              "E5635F"
            ]
          },
          {
            "name": "Serenity",
            "from": "Firefly",
            "colors": [
              "3C5375",
              "7285A6",
              "96AABF",
              "F1DB7E",
              "0C0C0C"
            ]
          },
          {
            "name": "Nostromo",
            "from": "Alien",
            "colors": [
              "08070C",
              "F4F3F5",
              "121828",
              "464F75",
              "9ABEF2"
            ]
          }
        ]
      },
      cid: ""
    }
    this.handleCollapsible = this.handleCollapsible.bind(this);
  }


  handleCollapsible(event){
  
    const newCid = event.currentTarget.getAttribute('data-id');

    this.setState(prevState =>{
      if (newCid === prevState.cid) {
        return {
          cid: null
        }
      } else {
        return {
          cid: newCid
        }
      }
    });
  }

  render() {

    return (
      <div className="App">

      {this.state.data.palettes.map((item, index) => <li>

        <Collapsible 
          id = {`c0${index}`}
          key = {`c0${index}`}
          name = {item.name}
          tv = {item.from}
          cidState = {this.state.cid}
          action = {this.handleCollapsible}
        />

      </li>)}
      </div>
    );
  }
}

export default App;


//Cuando tenemos qu ehaccer ago en react, que tengo que repintar, que hacer algo en la pantalla: eso huele a estado

//Vamos a crear el estado, que es un atributo especial de cada clase y por tanto se crea en el constructor (de la clase del componente madre)

//el estado siempre es un objeto

//para que sea visibe o no me basta con un booleano

//como voy a empezar con el oculto, le voy a poner un booleano

//si la propiedad esta en verdadero ponme esta clase, si no no

//vamos a hacer una interpolacion de cadenas y con un ternario le diremos si es verdadrp ponme una clase y si es falso no

//Siempre que hagamos cosas que dependen de un estado anterior nod eberiamos usar este sistema

//Deberiamos pasarle al this.setSttate una funcion que devuelva un objeto y entonces esta funcion ya si puede coger el estado anterior, prevState

//Asi React gestiona bien todos los cambios, llamando en setState a prevstate, porque puede que haya dos cambios de estado a la vez y perdamos uno de ellos, ya que el setState tarda un poquito, asi lo controla React

//Ell setState siempre necesita un obejto, pode,os tener un objeto a capon como teniamos antes, una varibale que tiene un objeto o una funcion que devuelva un objeto. Y le vamos a decir que el tenga el objeto, solo que ya React controla esto, no va a haber posibilidad de que lo perdamos.

//Si creamos ya dos colapasables se abren y cierran ambos a la vez. Esto ocurre porque ya no podemos tener simplemente una clave en el estado que sea isVisible true o false, ahora tenemos que decirlo en que colapsable se ha clicado.

//Los acordeones funcionan que todos pueden estar cerrados pero solo uno peude estar abierto. por tanto neesitamos dos valore: q para cuando todos esten cerrados y otro para cuando uno este abierto. Vamos a tirar de ID.

//Necesito tener un valor concreto para cuando todo este cerrado y un valor concreto que me diga cual esta abierto. Les pongo id c01 y c02 y nos olvidamos del booleano. Ahora ponemos la clave cid

//Comprobamos a mano que funciona: le decimos al objeto this.state que tenga la clave cid: c02 y ahora en nuestro booleano cambiamos el anterior isVisible===true por cid===c01 para la seccion 1 y cid===02 para la seccion 2. Vamos al inspector de React y probamos a mano, vemos que funciona. Ahora, ya seguros de que funciona, vamos a hacer que las clases se cambien con programacion desde react en vez de a mano.

//Para ello necesitamos tener acceso al id de section, por lo que creamos un atributo en el div colapsible que sea data-id=c01 y data-id=c02. Ahora ya vouy a poder acceder a ese valor.

//Ahora cojo mi funcion y ahor ay si que necesito el evento, para poder acceder a la criatura.
//Le digo a la funcion que del evento coja el currentTarget y su atributo data-id y lo guardo en una constante newCid. Ahora llamo a setState y le digo que el objeto ahora a a ser igual a cid: newCid. Asi me funciona, si clicko en un colapsable se abre y se cierra el otro y viceversa. Pero así nunca puedo tener los dos colapsables cerrados.

//Para conseguir tener los dos colapsables tambien cerrados a la vez voy a hacer un condicional: si hago click en el mismo elemento, cierramelo, si hago click en otro elemento, abreme ese elemento

//Si el prevState.cid es igual al newCid, dame null en el cid y si no, el cid debe ser igual al newCid.

//Ahora ya funcionan dos. Una vez que funcionan, vamos a indentar, quitamos los espacios extra y hacemos componentes


//Ahora que ya tenemos los dos componentes funcionando y solo ahora, vamos a coger las paletas



//para ccomprobar que funciona voy a mapear this.state.data.palette, que es nuestro array

//Ahora que ya vemos que nos lo pinta, lo vamos a hacer ya bonito. Voy a convertir mi array de palteas en un array de colapsabels, apsandole el componente qcolapsabel qeu ya tengo hecho. ahora admeas le tengo que pasar el nombre y la serie de tv

//Asi me hace cinco coapsables con el c01 cada una. Para solucionarlo vamos a ponerle un id a cada uno, para ello vamos a usar el index del map. Y aqui nos vamso a hacer una interpolacion de cadenas