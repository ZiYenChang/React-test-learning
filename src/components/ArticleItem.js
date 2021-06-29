// a component used by all article to show the content by getting the data from json file

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ArticleItem.css';

function ArticleItem(props) {
    const [data, setData] = useState([]);

    //the get request
    useEffect(() => {
        fetch(props.url)
            .then(response =>
                response.json())
            .then(myJson => {
                setData(myJson)
            })
            .catch(error => {
                console.log("GET error!")
                console.error(error);
            })
    }, []);

    return (
        <div className="ArticleItem">
            {/* the previous and next button*/}
            <ul className="buttons">
                <li>
                    {props.before ? <Link to={props.before} className="last-article-button">&#x25C4; Previous</Link> : null}
                </li>
                <li>
                    {props.next ? <Link to={props.next} className="next-article-button">Next &#x25BA;</Link> : null}
                </li>
            </ul>

            <div className="articleNumber">ARTICLE {props.num}</div>
            {/* the data taken from the json file */}
            {data.title && data.title.length > 0 ? <h1 className="title"> {data.title}</h1> : "Loading..."}  {/* the title of the article */}
            {/* need to use map() for body */}
            {data.body && data.body.length > 0
                ? data.body.map((item, i) => {
                    return (
                        <div key={i} className="content">
                            {/* different types uses different tag */}
                            {item.type === "heading" ? <h2>{item.model.text}</h2> : null}
                            {item.type === "paragraph" ? <p>{item.model.text}</p> : null}
                            {item.type === "image" ? <img src={item.model.url} alt={item.model.altText} width={item.model.width} height={item.model.height} /> : null}
                            {item.type === "list" && item.model.type === "unordered" ?
                                <ul>
                                    {item.model.items.map((list, i1) => {
                                        return (
                                            <li key={i1}>
                                                {list}
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                                : null}
                        </div>
                    );
                })
                : "Loading..."}

            {/* the previous and next button*/}
            <ul className="buttons">
                <li>
                    {props.before ? <Link to={props.before} className="last-article-button">&#x25C4; Previous</Link> : null}
                </li>
                <li>
                    {props.next ? <Link to={props.next} className="next-article-button">Next &#x25BA;</Link> : null}
                </li>
            </ul>
        </div>
    );

}
export default ArticleItem;