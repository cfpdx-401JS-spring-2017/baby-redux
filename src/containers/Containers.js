import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Editor from '../components/Editor';
import Greeter from '../components/Greeter';
import * as actions from '../actions/action';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export const GreeterContainer = connect(mapStateToProps)(Greeter);
export const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor);
