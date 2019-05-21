import React from 'react';
import './App.css';
import Calender from './components/calender'

function App() {
  return (
    <Calender />
  );
}

export default App;

// import React, { Component, Fragment } from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Calender from './components/calender'
// import Window from './components/window'


// class App extends Component {
//   render() {
//     return (
//         <BrowserRouter>
//           <Fragment>

//             <main>
//               <Switch>
//                 <Route exact path="/" component={Calender} />
//                 <Route exact path="/window" component={Window}/>

//               </Switch>
//             </main>

//           </Fragment>
//         </BrowserRouter>

//     );
//   }
// }

// export default App;