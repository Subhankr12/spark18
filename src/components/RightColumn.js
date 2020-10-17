import React from 'react';
import { removeFromRight } from '../actions';

export default class LeftColumn extends React.Component{
    onNameClick = (name, index, title) => {
        this.props.dispatch(removeFromRight(name, index, title));
    }

   render(){
    const {data} = this.props;
    return(
        <div className="container">
            {data.map((item, index) => 
                <div className="wrapper" key={index}>
                    <h4 className="title">{item.Title}</h4>
                    {item.names.map((name) => 
                        <a className="name" onClick={() => this.onNameClick(name, index, item.Title)}>
                            <h5>{name}</h5>
                        </a>
                    )}
                </div>
            )}
        </div>
    )
   }
}