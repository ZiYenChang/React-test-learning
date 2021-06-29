import React from 'react'
import ArticleItem from '../ArticleItem'

function Article4() {
    return (
        <div>
            < ArticleItem num="4" url="https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-4.json" before={process.env.PUBLIC_URL + '/article3'}/>
        </div>
    )
}

export default Article4