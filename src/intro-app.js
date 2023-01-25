import logo from './logo.svg';
//import './App.css';
import './main.css'
// una funcion puede ser declarada con una function o const nombre () =>{} 
const estilo2 = {
  boxShadow:'0 5px 3px rgba(0,0,0,0.5'
}

const estilo = ({ bg='#222' }) => ({
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

const Li = ({ children })=> {
  return ( 
     <li className='clase-li'>{children}
     </li>
  )
}

const App=() =>{
  const valor = 'triste'
  return (
    <ul className="clase-css">
   
    <Li estado="feliz">segundo valor de li</Li>
    </ul>
    );
}

export default App;
