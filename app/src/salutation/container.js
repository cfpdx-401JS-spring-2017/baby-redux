import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';
import Salutation from './Salutation';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const SalutationContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Salutation);

export default SalutationContainer;

