import "./component.css"; 
import "./bottom.css";

export default function Bottom(props){
    return(
        <div className="container">
            <div className="component-example bExample" style={{backgroundColor: `var(${props.bgColor})`}}>
                <div className="component-title">
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <button className="button gray">Learn {props.name}</button>
                </div>
            </div>
        </div>
    )
}