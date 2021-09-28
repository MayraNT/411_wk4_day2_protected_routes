import { connect } from 'react-redux';
import ProfileComponent from '../components/ProfileComponent';

const mapStateToProps = (state) => {
  return {
    hello: state.hello
  }
}

export default connect(mapStateToProps)(ProfileComponent);