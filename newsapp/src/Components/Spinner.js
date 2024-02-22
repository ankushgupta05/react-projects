/* 
// NOTE : Spinner take from boostrap 
link source:-
https://getbootstrap.com/docs/4.2/components/spinners/
*/

import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='container text-center mx-4 my-4'>
                <div className="spinner-border mx-4" style={{width: '3rem',height: '3rem'}} role="status">
                {/* <span className="sr-only">Loading...</span> */}
                <span className="sr-only"></span>
                </div>
                <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                {/* <span className="sr-only">Loading...</span> */}
                <span className="sr-only"></span>
                </div>
        
      </div>
    )
  }
}

export default Spinner
