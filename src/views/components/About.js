import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

const About = ({ goBack }) => (
  <View style={styles.container}>
    <Text style={styles.title}>About</Text>
    <Button onPress={ goBack } label='Go Back' />
  </View>
)

export default About
