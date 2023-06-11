import React from 'react';
import "./component.css"
import { data } from '../utils/data';
import article from '../assets/article.png'

const Resources = () => {
    return (
      <section className="resources-container" id="resources-container">
        <h2>Resources</h2>
        <div className="card-container">
            {data.map(datum =><div className="card" key={datum.id}>
                <img src={article} alt={datum.alt} />
                <div className="card-text">
                <p>{datum.description}</p>
                </div>
            </div>)}
        </div>
      </section>
    );
};
export default Resources;