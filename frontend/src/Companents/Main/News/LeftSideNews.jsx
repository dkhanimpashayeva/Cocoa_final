import React from 'react'
import {Link} from 'react-router-dom'
import './LeftSideNews.scss'
import HeroSlider from './../HomeCompanents/HeroSlider/HeroSlider';
import BestSellers from './../HomeCompanents/BestSellers/BestSellers';
const LeftSideNews = () => {
  return (
    <div className='left-side-news'>
<div className="resent-articles">
    <h2>Recent Articles
</h2>
<hr/>

<div className="resent-articles-info">
<div className="row">
<div className="col-lg-5">
    <img src="https://cdn.shopify.com/s/files/1/0436/0932/5722/articles/blog-10_360x.jpg?v=1596440995" alt="cocoa" />
</div>
<div className="col-lg-7">
    <h3>
<Link to='/'>Lets' Chocolate Makes your day</Link>
</h3>
</div>
</div>
</div>

<div className="resent-articles-info">
<div className="row">
<div className="col-lg-5">
    <img src="https://cdn.shopify.com/s/files/1/0436/0932/5722/articles/blog-10_360x.jpg?v=1596440995" alt="cocoa" />
</div>
<div className="col-lg-7">
    <h3>
<Link to='/'>Lets' Chocolate Makes your day</Link>
</h3>
</div>
</div>
</div>
</div>
<div className="news-tags">
<h2>Tags</h2>
<hr/>
<ul>
    <li>Bar</li>
    <li><span>Chocolate</span></li>
    <li><span>Cocoa</span></li>

    <li><span>Milk</span></li>

</ul>
</div>

<div className="best-products">
</div>



    </div>
  )
}

export default LeftSideNews