import React from 'react';
import Link from './Link';

class FilterLink extends React.Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const {store} = this.context;
    const {filter, children} = this.props;
    const state = store.getState();
    return (
      <Link
          active={filter === state.filter}
          onClick={() => store.dispatch({type: 'SET_FILTER', filter: filter})}
      >{children}</Link>
    );
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
};

export default FilterLink;
