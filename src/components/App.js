import React, { Component } from 'react';
import InputForm from './InputForm';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Display from './Display';
import Main from './Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../action-creators/actions';

class App extends Component {

  callFetchData = (name) => {
    this.fetchData(null, name)
  }

  fetchData = (e, location) => {
    if (e) {
      e.preventDefault();
    }
    let query = this.props.location || location
    if (!location || location === '') {
      query = this.props.location;
    } else {
      query = location;
    };
    let encodedLocation = encodeURIComponent(query);
    const urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    const urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=metric';
    let url = urlPrefix + encodedLocation + urlSuffix;
    this.props.actions.fetchData(url);
  };

  changeLocation = (event) => {
    this.props.actions.changeLocation(event.target.value);
  };

  render() {
    const { location, loadingStatus } = this.props;
    const isButtonEnabled = location.length > 0;

    let currentTemp, currentCond;

    if (this.props.data.list && loadingStatus === 'loaded') {
      currentTemp = Math.round(this.props.data.list[0].main.temp);
      currentCond = this.props.data.list[1].weather[0].description;
    } else if (loadingStatus === 'loading') {
      currentTemp = 'Loading data...';
      currentCond = 'Please wait';
    };

    return (
      <Router>
        <div className='main-container'>
        <Header />
          <Route exact path = "/" component = { Main } />
          <div className = "weather-app">
            <InputForm
              fetchDataSubmit = { this.fetchData }
              changeLocationSubmit = { this.changeLocation }
              location = { this.props.location }
              disabled={!isButtonEnabled}
            />
            <Container
              fetchDataClick= {this.callFetchData}
              filterLocation = { this.props.location }
            />
            <Display
              tempOutput = { currentTemp }
              condOutput = { currentCond }
            />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    data: state.data,
    loadingStatus: state.loadingStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
