/* impt short trick to print   :-  import PropTypes from 'prop-types' */

import './App.css';
// import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

import { 
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';



// this is class function
//   export class App extends Component {
//     pageSize = 5;
//     // apiKey = process.env.REACT_APP_NEWS_API;
//     apiKey ="2b4a3a4d4d0a419a9194991f97b8a0d5";

//    state ={
//     progress: 0,
//    }

//    setProgress = (progress)=>{
//     this.setState({progress:progress})
//    }


//   render() {
  
  
//     return (
//       <BrowserRouter>

//         <Navbar/>

//    {/* react top loading bar */}

//    <LoadingBar
//    height={3}
//         color='#f11946'
//         // progress={progress}
//         progress={this.state.progress}
//         // onLoaderFinished={() => setProgress(0)}
//       />


//             <Routes>
      
//                 <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general"  pageSize={this.pageSize}  country="in"   category="general" />}    />
//                 <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business"  pageSize={this.pageSize}   country="in" category="business" />}  />
//                 <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"  pageSize={this.pageSize}   country="in" category="entertainment" />}  />
//                 <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general"  pageSize={this.pageSize}   country="in" category="general" />} />
//                 <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health"  pageSize={this.pageSize}   country="in" category="health"  />} />
//                 <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science"  pageSize={this.pageSize}   country="in" category="science" />}  />
//                 <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize}   country="in" category="sports" />}  />
//                 <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"  pageSize={this.pageSize}   country="in" category="technology" />}  />

//             </Routes>



//       </BrowserRouter>
//     )
//   }
// }
// export default App




const App = ()=> {
  const pageSize = 5;
  // apiKey = process.env.REACT_APP_NEWS_API;
 const apiKey ="8ef91b7bcd874eb589650c19ea4de88a";

const [progress, setProgress] = useState(0)

  return (
    <BrowserRouter>

      <Navbar/>

 {/* react top loading bar */}

 <LoadingBar
 height={3}
      color='#f11946'
      // progress={progress}
      progress={progress}
      // onLoaderFinished={() => setProgress(0)}
    />


          <Routes>
    
              <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={pageSize}  country="in"   category="general" />}    />
              <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business"  pageSize={pageSize}   country="in" category="business" />}  />
              <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"  pageSize={pageSize}   country="in" category="entertainment" />}  />
              <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general"  pageSize={pageSize}   country="in" category="general" />} />
              <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health"  pageSize={pageSize}   country="in" category="health"  />} />
              <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={pageSize}   country="in" category="science" />}  />
              <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize}   country="in" category="sports" />}  />
              <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology"  pageSize={pageSize}   country="in" category="technology" />}  />

          </Routes>



    </BrowserRouter>
  )

}
export default App









/* 
NOTE:- react top loading bar 

https://www.npmjs.com/package/react-top-loading-bar?activeTab=readme


*/

/* 
npm i --save-dev dotenv
*/