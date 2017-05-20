import React, { Component, PropsTypes } from 'react'

import Home from './Home'
import About from './About'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const { CardStack } = NavigationExperimental

class Navigation extends Component {
  constructor (props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
    this.handleBackAction = this.handleBackAction.bind(this)
  }

  static propTypes = {
    pushRoute: PropsTypes.func.isRequired,
    popRoute: PropsTypes.func.isRequired,
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction)
  }

  renderScene(props) {
    const { route } = props.scene
    if (route.key === 'home') {
      return <Home handleNavigate={this.handleNavigate.bind(this)} />
    }

    if (route.key === 'about') {
      return <About _goBack={this.handleBackAction.bind(this)} />
    }
  }

  handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false
    }

    this.props.popRoute()
    return true
  }

  handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this.handleBackAction()
      default:
        return false
    }
  }

  render () {
    return (
      <CardStack
        direction="vertical"
        navigationState={this.props.navigation}
        onNavigate={this.handleNavigate.bind(this)}
        renderScene={this.renderScene} />
      )
   }
}

export default Navigation
