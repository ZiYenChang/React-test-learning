import React from 'react'
import ArticleItem from '../ArticleItem'

function Article3() {
    return (
        <div>
            < ArticleItem num="3" url="article-3.json" before='/article2' next='/article4'/>
        </div>
    )
}

export default Article3
