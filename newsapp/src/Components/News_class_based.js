


/* NOTE :-

this is a whole program are class based program 


*/



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


import React, { Component} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general',
      }
    static propsTypes = {
      // country: PropsTypes.string,
      // pageSize: PropsTypes.number,
      // category: PropsTypes.string,
    }
    
// this function convert 1st letter capital and it is taken from google sourc 'https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript'


capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
 }


  constructor(props){
    super(props);
    // console.log("Hellow I am a Constructor from news component");
    
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;

  }

async updateNews(){
  this.props.setProgress(10);



  //a86ed1c1d3fb4cc5b3fca8c91044bb9b created by email account 'ankushgupta0510@gmail.com' and plane expire
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page}&pageSize=${this.props.pageSize}`

  
  // 2b4a3a4d4d0a419a9194991f97b8a0d5 new api creted by this email account 'ankushgupta725@gmail.com' plane is Reminder
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

  this.setState({loading: true})
  let data = await fetch(url);
  this.props.setProgress(30);
  // console.log(data)
  let parseData = await data.json()
  this.props.setProgress(70);
  console.log(parseData);
  this.setState({
    articles: parseData.articles,
    totalResults: parseData.totalResults,
    loading: false,
  })

  this.props.setProgress(100);
    
}



async  componentDidMount(){
    // console.log("cdm")
    // let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=1&pageSize=${this.props.pageSize}`



    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=1&pageSize=${this.props.pageSize}`

    // this.setState({loading: true})
    // let data = await fetch(url);
    // // console.log(data)
    // let parseData = await data.json()
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // })



    this.updateNews();
    
  }
  
  
 handlePrevClik = async ()=>{
    // console.log("Previous")

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    // // let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`

    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parseData = await data.json()
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading: false,
    // })


    this.setState({page: this.state.page - 1});
    this.updateNews();

  }


  
  handleNextClik =  async()=>{
    // console.log("Next")
    
  // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    
  //   // let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a86ed1c1d3fb4cc5b3fca8c91044bb9b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true})
  //   let data = await fetch(url);
  //   let parseData = await data.json()
  //   // console.log(parseData);
  //   // this.setState({loading: false})
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   })
  
  // }

  
  this.setState({page: this.state.page + 1});
  this.updateNews();
  
  
}


 fetchMoreData =async ()=>{
  this.setState({page: this.state.page + 1})
  //  this.updateNews()
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

  this.setState({loading: true})
  let data = await fetch(url);
  // console.log(data)
  let parseData = await data.json()
  console.log(parseData);
  this.setState({
    articles:this.state.articles.concat(parseData.articles),
    totalResults: parseData.totalResults,
    loading: false,
  })

}


render(){
  
  console.log("render")

    return (
      <>
      {/* <div className='container my-3'> */}
            <h1 className='text-center' style={{margin:'40px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter((this.props.category))} Headlines </h1>
            {/* {this.state.loading && <Spinner/>} */}

            {/* {this.state.loading && <Spinner />} // if the loading is true than spinner work otherwise no work */}


           {/* infinite code taken from source link 'https://codesandbox.io/p/sandbox/yk7637p62z?file=%2Fsrc%2Findex.js%3A32%2C9-37%2C10' */}


        <InfiniteScroll
          // dataLength={this.state.items.length}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // hasMore={true}
          hasMore={this.state.articles.length !== this.state.totalResults}
          // loader={<h4>Loading...</h4>}
          loader={<Spinner/>}
        >
          
          <div className='container'>

        

            <div className="row my-2">
            {/* { !this.state.loading &&  this.state.articles.map((element)=>{ */}
            {  this.state.articles.map((element)=>{

             return <div  key={element.url}   className="col-md-4">
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} data={element.publishedAt}  source={element.source.name}  />
                    </div>

                    })}
            </div>
          </div>
        </InfiniteScroll>
                    
                    
                    {/* <div className="col-md-4">
                        <NewsItem  title="This is a title" description="This is a description "/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem  title="This is a title" description="This is a description "/>
                    </div> */}
                  

                  {/* <div className="container d-flex justify-content-between my-2">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClik}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClik} >Next &rarr; </button>
                  </div> */}
            {/* </div> */}

            </>
    )
  }
}

export default News

/* 

// run this command for react infinite scroll search
// npm i react-infinite-scroll-component
// google source link

*/


/* 
environment variables create react app
source Link
https://create-react-app.dev/docs/adding-custom-environment-variables/
*/