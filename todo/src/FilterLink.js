import React from 'react';
import {connect} from 'react-redux';
import Link from './Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {dispatch({type: 'SET_FILTER', filter: ownProps.filter});}
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
