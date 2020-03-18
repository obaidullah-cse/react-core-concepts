import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Jafor khan','Bapparaz','Josim','Bappi']
  const products = [{name:'Photoshop', price:'90.99'},
          {name:'Adobe', price:'6.99'},
          {name:'Primere', price:'60.99'},
          {name:'Opera', price:'20.99'},
          {name:'Comedown', price:'62.99'}]
  return (
    <div className="App">
      <header className="App-header">
      <p>I AM A WEBDEVELOPER</p>
      <Users></Users>
      <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

      {/* <Product product ={products[0]}></Product>
      <Product product ={products[1]}></Product>
      <Product product ={products[2]}></Product> */}

      <Person name={nayoks[1]} nayika='Sabnur'></Person>
      <Person name={nayoks[2]} nayika='motri'></Person>
      <Person name='Rana' nayika='Rani'></Person>
      <Person name='Manna' nayika='Gaza'></Person>

      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(users => <li>{users.name}: {users.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleDcrease = () => setCount(count-1);

  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDcrease}>Dcrease</button>
      <button onClick={handleIncrease}>Increase</button>

    </div>
  )
}


function Product(props){
  const productStyle ={
    borderRadius:'5px',
    border: '1px solid gray',
    background: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'black',
    marginBottom: '10px'
  }
  const {name,price} =props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h1>{price}</h1>
    </div>
  )
}

function Person(props){
  const personStyle = {
    border:'2px solid green',
    margin: '10px',
    padding:'10px'
  }
  return (
  <div style={personStyle}>
    <h1>{props.name}</h1>
    <h3>{props.nayika} of the year</h3>
  </div>
  )
}


export default App;
