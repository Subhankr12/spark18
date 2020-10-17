import React from 'react';
import { data } from '../data';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import { addList } from '../actions';

export default class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    })

    store.dispatch(addList(data));
  }
  render(){
    const { leftList, rightList } = this.props.store.getState();
    return (
      <div className="App">
        <LeftColumn data={leftList}/>
        <RightColumn data={rightList}/>
      </div>
    )
  }
}
