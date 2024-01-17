import React, { Component} from 'react'
import NewsItem from './NewsItem'
import BackUpImage from './INF3.jpg'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    constructor() {
      super();
      
      this.state = {
        articles : [],
        loading : false,
        page: 1,
      }
    }

    capitalize = (text) => {
        return  text.charAt(0).toUpperCase() + text.slice(1);
    }

    async updateNews() {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}${this.props.category?`&category=${this.props.category}`:""}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}${this.props.search?(`&q=${this.props.search}`):""}`
      this.setState({loading : true});
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        articles :  parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading : false,
      })
      document.title = this.capitalize(this.props.category) + " News-Monkey"
    }


    async componentDidMount() {
      
      this.updateNews()
    }

    handlePrevClick = async () => {
      
      await this.setState({page: this.state.page - 1})
      console.log("Prev = " ,this.state.page)
      this.updateNews()
    }

    handleNextClick = async () => {
       
        await this.setState({page: this.state.page + 1})
        console.log("Next = ", this.state.page)
        this.updateNews()
    }

  render() {
    return (
      <div className="container" id="news-container">
        <h2 className={`my-5 text-center text-${this.props.textColor} text-capitalized`}>Top headlines from {this.capitalize(this.props.category)}</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
        {!(this.state.loading )&& this.state.articles.map((ele) => {
        return <div className="col-md-4 my-3" key={ele.url}>
            <NewsItem 
            title={ele.title?ele.title:""} 
            desc={ele.description?ele.description:""} 
            imageUrl={ele.urlToImage?ele.urlToImage:BackUpImage} 
            newsUrl={ele.url}
            source={ele.source.name}
            date={ele.publishedAt}
            author={ele.author?ele.author:"Unknown"}
            mode={this.props.mode}
            textColor={this.props.textColor}
            />
        </div>
        })
      }
        <div className="d-flex gap-2 justify-content-between my-3 mx-2">
        <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-warning">&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-warning" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      </div>
    )
  }
}

News.propType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
}

export default News

// <---New Func--->
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8172674da04716b8ded2af192c0de9&page=1&pageSize=${this.props.pageSize}`
      // this.setState({loading : true});
      // let data = await fetch(url)
      // let parsedData = await data.json()
      // this.setState({
      //   articles :  parsedData.articles, 
      //   totalResults: parsedData.totalResults,
      //   loading : false
      // })

//<----Prev BTN--->
// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8172674da04716b8ded2af192c0de9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      // this.setState({loading : true})
      // let data = await fetch(url)
      // let parsedData = await data.json()
      // this.setState({
      //   articles :  parsedData.articles,
      //   page : this.state.page - 1,
      //   loading : false
      // })

//<-----Next BTN --->
// if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
  // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a8172674da04716b8ded2af192c0de9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
  // this.setState({loading : true})
  // let data = await fetch(url)
  // let parsedData = await data.json()
  // this.setState({
  //   articles :  parsedData.articles,
  //   page : this.state.page + 1,
  //   loading : false
  // })
// }