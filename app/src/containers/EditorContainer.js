import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/greeter.actions';
import Editor from '../components/Editor';

const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const EditorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);

export default EditorContainer;