import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './Component/Header'
import MemeGenerator from './Component/MemeGenerator';
export class App extends React.Component{
constructor(){
  super()
  this.state={

  }
}
render()
{
return(
 <div>
<Header/>
<MemeGenerator/>
</div>
)
}
}
export default App;
