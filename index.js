import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

//variable function (closure) - not hoisted. Can store state and be assigned to a variable. 
// This one has an implicit return
// const Title = props => (
//   <h1 className="title">{props.text}</h1>
// );

function Header() {
  return (
  <div className="header-box">
      <h1>Legend</h1>
      <div className="period-container">
        <p>Comparison Period</p>
        <p>Holiday Period</p>
      </div>
  </div>)
}

function Dropdown(props) {
  const handleClick = () => {
    props.onClick();
  }
  
  return (
    <div onClick={handleClick}>{props.selected ? "-" : "+" }</div>
  )
}

const products = [
  { id: 1, name: 'OneOdio' },
  { id: 1, name: 'Bose' },
  { id: 1, name: 'Beats' },
  { id: 1, name: 'Sennheiser Consumer Audio' },
  { id: 1, name: 'Audio-Technica' },
];

function Content(props) {
  return (
    <ul>
      {props.products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
    );
};


// JSX: close bracket /> is calling the function 
// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  //array destructuring: read : write
  // using useState hook - managing state 
  const [selected, setSelected] = React.useState(false);
  
  
  const toggle = () => {
    setSelected(!selected)
    // if (selected == true){
    //   setSelected
    // } else {
    //   selected == false
    // }
  }
  
  return(
    <div className="box" >
      <div className="header">
        <Dropdown onClick={toggle} selected={selected} />
        <Header />
      </div>  
      {selected ? <Content products={products}/> : null}
    </div>
  );
}

//renders root 
ReactDOM.render(<App />,
document.getElementById("root"))
