import React from 'react'
import ArticleItem from '../ArticleItem'

function Article3() {
    return (
        <div>
            < ArticleItem num="3" url="https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json" before='/article2' next='/article4'/>
        </div>
    )
}

export default Article3
