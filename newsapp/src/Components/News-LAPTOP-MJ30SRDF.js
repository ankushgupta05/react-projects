/* 
 this whole program is function based program and it is converted by class 

*/

import React, { useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)



const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
 }


  // constructor(props){
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: false,
  //     page: 1,
  //     totalResults : 0,
  //   }
    

  // }

const updateNews = async()=>{
  props.setProgress(10);

  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

  // props.setState({loading: true})
  setLoading(true)
  let data = await fetch(url);
  props.setProgress(30);
  // console.log(data)
  let parseData = await data.json()
  props.setProgress(70);
  // console.log(parseData);
  setArticles(parseData.articles)
  setTotalResults(parseData.totalResults)
  setLoading(0)
  // this.setState({
  //   articles: parseData.articles,
  //   totalResults: parseData.totalResults,
  //   loading: false,
  // })

  props.setProgress(100);
    
}



useEffect(() => {
     document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
     updateNews();
     // eslint-disable-next-line 
}, [])

  
const handlePrevClik = async ()=>{
    // this.setState({page: this.state.page - 1});
    setPage(page - 1)
    updateNews();

  }
const handleNextClik =  async()=>{
  // this.setState({page: this.state.page + 1});
  setPage(page + 1)
  updateNews();
  
  
}


const fetchMoreData = async ()=>{
  // this.setState({page: page + 1})
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
  setPage(page + 1)

  // this.setState({loading: true})
  setLoading(true)
  let data = await fetch(url);
  let parseData = await data.json()
  console.log(parseData);
  setArticles(articles.concat(parseData.articles))
  setTotalResults(parseData.totalResults)
  // setLoading()

}

  
return (
      <>
            <h1 className='text-center' style={{margin:'15px 0px',marginTop:'70px'}}>News - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
            {/* { loading &&<Spinner/> } */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          
          <div className='container'>

        

            <div className="row my-2">
            { articles.map((element)=>{

             return <div  key={element.url}   className="col-md-4">
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} data={element.publishedAt}  source={element.source.name}  />
                    </div>

                    })}
            </div>
          </div>
        </InfiniteScroll>
                    
            </>
    )
  
}



// in function  propstype write at the end of program
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
  }
News.propsTypes = {
  // country: PropsTypes.string,
  // pageSize: PropsTypes.number,
  // category: PropsTypes.string,
}



export default News




/* 

// eslint-disable-next-line 
     
about line important bcz it remove an unkone error 

*/