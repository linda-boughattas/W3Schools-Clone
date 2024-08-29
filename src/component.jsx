import React, { useEffect } from 'react';
import hljs from 'highlight.js'; 
import 'highlight.js/styles/atom-one-dark.css'; 
import "./component.css"; 


export default function Component(props){
    useEffect(() => {
        hljs.highlightAll();
      }, []);
    console.log(props)
    return(
        <div className="component-container" style={{ backgroundColor: `var(${props.bgColor})` }}>
            <div className="component-title">
                <h1 style={{ color: `var(${props.textColor})` }}>{props.name}</h1>
                <p style={{ color: `var(${props.textColor})` }}>{props.description}</p>
                <button className="button green">Learn {props.name}</button>
                <button className="button white">{props.name} Reference</button>
            </div>
            <div className="compoenet-example">
                <h6>{props.name} Example:</h6>
                <pre className="component-code">
                <code dangerouslySetInnerHTML={{ __html: props.example }}></code>
                </pre>
                <button className="button green">Try it Yourself</button>
            </div>
        </div>
    )
}