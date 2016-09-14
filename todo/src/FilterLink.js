import React from 'react';
import {connect} from 'react-redux';
import Link from './Link';

const setFilter = (filter) => ({type: 'SET_FILTER', filter: filter});

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {dispatch(setFilter(ownProps.filter));}
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
