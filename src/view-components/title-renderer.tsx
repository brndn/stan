import React from 'react';

export function renderTitles(items:any, max:number, clazz:string) {
    const reducedItems = [...items].slice(0, max);
    return <div className={`title-container ${clazz}`}>
        {reducedItems.map(function (item, i) {
            return <div key={i} className="title-entry">
                <img className="show-title-img" src={item.srcPath}/>
                <h5>{item.title}</h5>
            </div>
        })}
    </div>
}