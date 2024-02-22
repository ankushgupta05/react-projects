// import React, { Component } from 'react'
import React from 'react'

// class fucntion
// export class NewsItem extends Component {
 


//   render() {
//   let  {title, description, imageUrl, newsUrl, author, date, source} = this.props

//     return (
//       <div className='my-2'>

//           {/* <div className="card" style="width: 18rem;"> */}
//           {/* <div className="card" style={{width:'18rem'}}> */}
//           <div className="card">
//           {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span> */}
//           <div style={
//             {  
//               display:'flex',
//               justifyContent:'flex-end',
//               position:'absolute',
//               right:'0'
//             }
//               }>
//                <span class="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
//           </div>

//             <img src={imageUrl!==null?imageUrl:"https://images.wsj.net/im-923101/social"} className="card-img-top" alt="..."/>
//             <div className="card-body">
              
//               <h5 className="card-title">{title}</h5>
//               <p className="card-text">{description}...</p>
//               <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown": author} on {new Date(date).toGMTString()}</small></p>
//               <a href={newsUrl} target='_blank'  className="btn btn-sm btn-dark">Read More</a>
//             </div>
//           </div>       
          
//       </div>
//     )
//   }
// }
// export default NewsItem


// class convert into function
// export class NewsItem extends Component {
const  NewsItem = (props)=>{
  // let  {title, description, imageUrl, newsUrl, author, date, source} = this.props
  let  {title, description, imageUrl, newsUrl, author, date, source} = props

    return (
      <div className='my-2'>

          {/* <div className="card" style="width: 18rem;"> */}
          {/* <div className="card" style={{width:'18rem'}}> */}
          <div className="card">
          {/* <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span> */}
          <div style={
            {  
              display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'
            }
              }>
               <span class="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
          </div>

            <img style={{height: '230px',objectFit:'contain'}} src={imageUrl!==null?imageUrl:"https://images.wsj.net/im-923101/social"} className="card-img-top" alt="..."/>
            <div className="card-body">
              
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank'  className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>       
          
      </div>
    )
}
export default NewsItem











/* 

in boostrap badges also important so that you can also use it

*/


/* 
// NOTE:  This is important concept to find Date

a = "2021-08-27T07:00:00Z"
'2021-08-27T07:00:00Z'
d = new Date(a)
Fri Aug 27 2021 12:30:00 GMT+0530 (India Standard Time)
d.getDate()
27
d.getTime()
1630047600000
d.getSeconds()
0
d.getMinutes()
30
d.toGMTString()
'Fri, 27 Aug 2021 07:00:00 GMT'


*/
