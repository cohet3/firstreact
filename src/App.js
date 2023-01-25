// import Button from "./Button"
// const arr = [
//     'Danny bonico',
//     'Danny bonico2' ,
//     'Danny bonico3',
// ]
// const App = () => {
//     const miVariable = false
//     if(miVariable) {
//         return <p> Mi variable dio true!</p>
//     }
//     return (
//         <div>
//             <h1 on onClick={(e) => console.log('click',e)}>hola mundo</h1>
//             {arr.map(el => <p key={el}>{el}</p>)}
//             <Button onClick={()=> console.log('clickeado')}>Enviar</Button>
//         </div>
//     )
// }

import { Component } from 'react'

class Button extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log('constructor', props);
    }

    componentDidMount(){
        console.log('componentDiMount');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
    }
    componentWillUnmount(){
        console.log('desmontando componente', this.props, this.State)
    }

    render(){
        console.log('ejecutando metodo render de button');
        return (
             <button onClick={() => this.setState({ prop: 1 })}>
                ENVIAr
             </button>
              )
        }
}

class App2 extends Component {
    state = { valor:3 }
    render() {
        console.log(this.state)
        return(
           <div> 
            <p>hola mundo</p>
            
            {this.state.valor === 3
            ? <Button bonico='feliz'/>
            : null}
            <button
            className={`${this.state.valor}`} 
            onClick={()=> this.setState({valor: 2})}>
            Enviar en app
            </button>
            </div>
        )
    }
}
 //empieza el siguiente tema
class Input extends Component {
     
    render () {
        return (
            <input 
            value={this.props.value} 
            onChange={this.props.onChange}
            />
        )
    }
}
class App extends Component {
    state = {
        nombre: '',
        apellido: '',
    }
    updateNombre = (v)=> {
        console.log(this); 
        this.updateValues('nombre', v.target.value)
    }
    updateValues = (prop, value) => {
        this.setState({ [prop]: value})
    }
    render() {
        return (
            <p>
                Nombre completo: {`${this.state.nombre} ${this.state.apellido}`}
                <Input 
                value={this.state.nombre}
                onChange={this.updateNombre}
                />
                <Input                
                value={this.state.apellido}
                onChange={e => this.updateValues('apellido',e.target.value)}
                />
            </p>
        )
    }
}




















export default App 


