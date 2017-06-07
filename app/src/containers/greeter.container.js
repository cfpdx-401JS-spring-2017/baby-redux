import { connect } from 'react-redux';
import Greeter from '../components/Greeter';

const mapStateToProps = state => state;

const GreeterContainer = connect(mapStateToProps)(Greeter);

export default GreeterContainer;