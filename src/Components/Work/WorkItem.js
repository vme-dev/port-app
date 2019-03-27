import React from 'react';

export default function (props) {
	
	return (
		<div className="work-item" onMouseEnter={(e)=>{console.log(e.currentTarget)}}> 
                <img src={props.data.img} class="work-img" alt="" /> 
                <div className="work-info-wrap">
                <div className="work-info">
                    <h3 className="work-info-head">{props.data.name}</h3>
                    
                    <p className="work-info-text">{props.data.description}</p>

                    <div className="tags">
                    <span className="tag">{props.data.tags}</span>
                    </div>

                    <div className="btn-block clearfix">
                        <div className="btn toWork"><a href={props.data.site}>Work</a></div>
                        <div className="btn toCode"><a href={props.data.code}>Code</a></div>
                    </div>
                   
                </div>
                </div>
		</div>
		);
}

// {this.props.tags.map((item) => (
//     <span className="tag">{item}</span>
// ))}