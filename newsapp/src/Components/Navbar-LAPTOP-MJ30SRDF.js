// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'


// class  function
// export class Navbar extends Component {


  
//   render() {
    

//     return (    
//       <div>
        
//         {/* <nav className="navbar  navbar-expand-lg bg-body-tertiary "> */}
//         <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
//   <div className="container-fluid">
//     <Link className="navbar-brand" >NewsMonkey</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">

//        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/about">link</Link></li>


//           <li className="nav-item"><Link className="nav-link " to="/business">Business</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/entertainment">Entertainment</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/general">General</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/health">Health</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/science">Science</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/sports">Sports</Link></li>
//           <li className="nav-item"><Link className="nav-link " to="/technology">Technology</Link></li>

//       </ul> 

//     </div>
//   </div>
// </nav>
        
//       </div>
//     )
//   }
// }
// export default Navbar




//  Convert into class funtion to normal function
// export class Navbar extends Component {
const Navbar = ()=>{

      return (    
        <div>
          
          {/* <nav className="navbar  navbar-expand-lg bg-body-tertiary "> */}
          <nav className="navbar navbar-dark navbar-expand-lg bg-secondary fixed-top ">
    <div className="container-fluid " style={{margin:'0px 10px'}}>
      <div>
          <Link className="navbar-brand" style={{fontSize:'27px'}} >TufaanExpress</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      </div>

      <div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              {/* <li className="nav-item"><Link className="nav-link " to="/about">link</Link></li> */}
              <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
    
          </ul> 
    
        </div>
      </div>
       <div>
       
              <form method="get" action="/" className="form-inline  my-2 my-lg-0" style={{display:'flex'}}>
                 <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search"  name="search" id="search" />
                 <button className="btn btn-outline-success my-sm-0" type="submit" style={{backgroundColor:'gold'}}>Search</button>
                 {/* <button type="button" class="btn btn-secondary mx-2" id="popcart" data-bs-container="body" data-bs-toggle="popover" data-bs- 
                  placement="bottom" data-html="true" data-bs-content="Bottom popover">Cart(<span id="cart">0</span>)</button> */}
               </form>
       
       </div>
    </div>
  </nav>
          
        </div>
      )
  }
  export default Navbar








{/*

NOTE :- this is category get in this link source 'https://newsapi.org/docs/endpoints/sources'

business
entertainment
general
health
science
sports
technology 

*/}



// 'rce'  full form -->  React Class Base Component 
// 'rcep' full form --> React Class export Component with prop type 
