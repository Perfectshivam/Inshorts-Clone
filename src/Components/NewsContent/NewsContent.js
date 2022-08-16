import React from 'react'
import { Container } from '@mui/material';
import './newsContent.css';
import NewsCard from '../NewsCard/NewsCard';


function NewsContent({newsArray
  // ,newsResults,loadMore,setLoadMore
}) {
  return (
    <Container maxWidth='md'>
        <div className='content'>
            <div className='downloadMessage'>
                <span className='downloadText'>For the best experience use inshorts app on your smartphone</span>
                <img src='https://assets.inshorts.com/website_assets/images/appstore.png' alt='app-store' height="80%"/>
                <img src='https://assets.inshorts.com/website_assets/images/playstore.png' alt='play-store' height="80%"  />
            </div>
            {newsArray.map((newsItem)=>(
                <NewsCard newsItem={newsItem} key={newsItem.title}/>
            ))}

            {/* load more wont work in this api */}
             {/* {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore+5)}>
              Load More
            </button>
          </>
        )}  */}
        </div>
    </Container>
  )
}

export default NewsContent