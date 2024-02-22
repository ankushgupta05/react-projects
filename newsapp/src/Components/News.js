/* NOTE :

 '&larr;'  html Arrow show like this  -->  ' ← '
 '&rarr;'  html Arrow show like this  -->  ' → '

 Source Link 'https://www.w3schools.com/charsets/ref_utf_arrows.asp' 

*/



/* 
//NOTE : 'pageSize' This keyword defind article jitne app dikhane chahate ho screen par

source link:- 
https://newsapi.org/docs/endpoints/everything


*/


import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    // console.log("Hellow I am a Constructor from news component");
    
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1
    }

  }

async  componentDidMount(){
    // console.log("cdm")
    let url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=1&pageSize=20"
    let data = await fetch(url);
    // console.log(data)
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults})
  }
  
  
 handlePrevClik = async ()=>{
    console.log("Previous")
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page - 1}&pageSize=20`
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles})
  }
  
handleNextClik =  async()=>{
  console.log("Next")

  if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

  }

  else{

    
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    })
    
  }
    
}



  render(){

    console.log("render")

    return (
      <div className='container my-3'>
            <h1>NewsMonkey - Top Headlines</h1>

            <div className="row my-2">
            {this.state.articles.map((element)=>{

             return <div  key={element.url}   className="col-md-4">
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>

            })}
                    {/* <div className="col-md-4">
                        <NewsItem  title="This is a title" description="This is a description "/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem  title="This is a title" description="This is a description "/>
                    </div> */}
                  

                  <div className="container d-flex justify-content-between">
                  <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClik}> &larr; Previous</button>
                  <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleNextClik} >Next &rarr; </button>
                  </div>
            </div>

      </div>
    )
  }
}

export default News
