import React from 'react';

export default class LeftColumn extends React.Component{
    onNameClick = (index) => {
        console.log(index + ' clicked');
    }

   render(){
    const {data} = this.props;
    return(
        <div className="container">
            {data.map((item, index) => 
                <div className="wrapper" key={index}>
                    <h4 className="title">{item.Title}</h4>
                    {item.names.map((name, index) => 
                        <a className="name" key={index} onClick={(name) => this.onNameClick(name)}>
                            <h5>{name.name}</h5>
                        </a>
                    )}
                </div>
            )}
        </div>
    )
   }
}