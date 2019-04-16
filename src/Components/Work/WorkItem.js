import React from 'react';

export default function (props) {
    
    var arr = props.data.tags.split(",");

	return (
		<div className="work-item" > 
                <img src={props.data.img} class="work-img" alt="" /> 
                <div className="work-info-wrap">
                <div className="work-info">
                    <h3 className="work-info-head">{props.data.name}</h3>
                    
                    <p className="work-info-text">{props.data.description}</p>

                    <div className="tags">
                        {arr.map((item) => {
                        return <span className="tag">{item}</span>
                        })}
                    </div>

                    <div className="btn-block clearfix">
                        <div className="btn toWork"><a href={props.data.open}>Open</a></div>
                        <div className="btn toCode"><a href={props.data.code}>Code</a></div>
                    </div>
                   
                </div>
                </div>
		</div>
		);
}

