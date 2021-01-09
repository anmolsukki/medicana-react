import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { getUserAction } from '../Redux/Global/Action';
import { HelmetTag } from '../Util/HelmetTag';
import Footer from './Components/MainComponent/Footer';
import Headers from './Components/MainComponent/Headers';

class App extends Component {
  componentDidMount() {
    document.body.classList.add('cnt-home');
  }

  render() {
    return (
      <div>
        <HelmetTag title="Medicana - Online Pharmacy India" description="Medicana - Online Pharmacy India | Buy Medicines from India's Trusted Medicine Store: Medicana" />
        <Headers />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.global.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserAction: () => dispatch(getUserAction()),
  };
}

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(App),
  loadData,
};

export function loadData({ dispatch }) {
  return dispatch(getUserAction());
}
