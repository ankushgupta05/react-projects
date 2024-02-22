/* impt short trick to print   :-  import PropTypes from 'prop-types' */

import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PropTypes, { exact } from 'prop-types';

import { createBrowserRouter, RouterProvider } from "react-router-dom";




const router = createBrowserRouter([

    {
      exact,
      path:"/",
      element: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },

    {
      exact,
      path:"/business",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },

    {
      exact,
      path: "/entertainment",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },
    {
      path: "/General",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },

    {
      path: "/Health",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },
    
    {
      path: "/Science",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },

    {
      path: "/Sports",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },

    {
      path: "/Technology",
      elemen: <><Navbar/><News  pageSize={5} country="in"  category="science" /></>,
    },
    
  ])


  export class App extends Component {

  render() {
  
  
    return (
      <div>

      <RouterProvider router={router} />

        {/* <Navbar/> */}
        {/* <News  pageSize={5} country="in"  category="science" /> */}
      
      </div>
    )
  }
}

export default App


