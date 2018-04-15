import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action-creators/actions.js';

export class Container extends Component {
  componentDidMount() {
    this.props.actions.fetchCities();
  }

  addNewCity = (handleSubmit) => {
    handleSubmit.preventDefault();
    const { name } = this.props;
    let data = {
      name: name
    };
    this.props.actions.fetchPostNewCity(data);
  };

  render() {
    let cities = this.props.cityList;
    let filterLocation = this.props.filterLocation.trim().toLowerCase();
    if (filterLocation.length > 0) {
      cities = cities.filter(city =>
        city.name.toLowerCase().match( filterLocation )
      );
    };

    return (
      <div>
        <ul>
          { cities }
        </ul>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    cityList: state.cityList,
    toggleCityForm: state.toggleCityForm,
    name: state.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
