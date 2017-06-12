import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import Greeting from './Greeting';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
    return bindActionCreators(actions, dispatch);
}

const GreetingContainer = connect(mapStateToProps,mapDispatchtoProps)(Greeting);

export default GreetingContainer;