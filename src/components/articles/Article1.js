import React from 'react'
import ArticleItem from '../ArticleItem'

function Article1() {
    return (
        <div>
            < ArticleItem num="1" url="https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-1.json" next={process.env.PUBLIC_URL + '/article2'}/>
        </div>
    )
}

export default Article1