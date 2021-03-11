import React from 'react'

const PageTemplate = ({ data }) => {
    const {title, content} = data

    return (
        <article class="page">
            <h1>{title}</h1>
            {content}
        </article>
    )
}

export default PageTemplate