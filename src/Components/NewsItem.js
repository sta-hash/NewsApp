import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}= this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
   <img src={imageUrl} 
  className="card-img-top"
  alt="..." 
    /> 
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
    <p className="card-text">{description}...</p>
    
      
    <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p> 
    <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
        
      </div>
    );
  }
}
