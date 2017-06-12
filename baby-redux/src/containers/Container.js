
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Greeting from '../components/Greeting';
import * as actions from '../actions/action';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export const GreetingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);