import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Greeter from '../components/Greeter';

const GreeterContainer = connect()(Greeter);

export default GreeterContainer;
