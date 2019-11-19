import React from 'react';

export function renderTitles(items, max) {
    const reducedItems = [...items].slice(0, max);
    return <div className="title-container">
        {reducedItems.map(function (item, i) {
            return <div key={i} className="title-entry">
                <img src={item.images["Poster Art"].url} alt={item.title}/>
                <h2>{item.title}</h2>
            </div>
        })}
    </div>
}