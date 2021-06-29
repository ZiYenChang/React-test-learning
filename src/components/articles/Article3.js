import React from 'react'
import ArticleItem from '../ArticleItem'

function Article3() {
    return (
        <div>
            < ArticleItem num="3" url="https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-3.json" before={process.env.PUBLIC_URL + '/article2'} next={process.env.PUBLIC_URL + '/article4'}/>
        </div>
    )
}

export default Article3
