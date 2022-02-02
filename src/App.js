import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/content';
import Side from './components/Side';
import Aos from 'aos'
import "aos/dist/aos.css"
class Header extends React.Component{
  render(){
    return <div>
      <h2>
        This is Component
      </h2>
    </div>
  }
}

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Ini adalah mencoba react</h1>
//         <Navbar></Navbar>
//       <Header></Header>
//       </div>
//     );
//   }
// }

function App() {
  Aos.init();
  return (
    <div className="">
      
      <Navbar>
        
      </Navbar>
      <Side>
        
      </Side>
      <Content>

      </Content>
      
    </div>

   
  );
  // return React.createElement('h1', {class:'header'},'hello world');
}

export default App;
