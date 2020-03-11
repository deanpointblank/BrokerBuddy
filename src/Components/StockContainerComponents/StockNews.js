import React, { Component } from 'react'

export const NewsItem = (props) => {
    return(
        <li className="media">
            <img src={props.news.image} className="mr-3" alt='' />
            <div className="media-body">
                <h5 className="mt-0 mb-1"><a href={props.news.url}>{props.news.headline}</a></h5>
                <p><small>{props.news.source}</small></p>
                <p>{props.news.summary}</p>
            </div>
        </li>
    )
}
