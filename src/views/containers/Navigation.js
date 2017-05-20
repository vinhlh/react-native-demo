import { connect } from 'react-redux'

import Navigation from '../components/Navigation'
import actions from '../../state/reducers/navigation/actions'

const mapStateToProps = ({ navigation }) => ({
  navigation
})

export default connect(
  mapStateToProps,
  actions
)(Navigation)
