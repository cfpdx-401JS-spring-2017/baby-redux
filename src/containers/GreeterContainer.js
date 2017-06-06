import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Greeter from '../components/Greeter';
import * as actions from '../actions/action';

const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// };

const GreeterContainer = connect(mapStateToProps)(Greeter);

export default GreeterContainer;
