import React from 'react'

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

import { getCachedAuthAsync, signInAsync } from '../../config'

class ConnexionView extends React.Component {
  handleConnected = () => {
    this.props.navigation.navigate('Main')
  }

  handleSignIn = () => {
    getCachedAuthAsync()
  }

  handleLogin = () => {
    signInAsync()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Connexion view</Text>
        {/* <Button title='Login' /> */}
        <Button title='Déjà connecté ?' onPress={this.handleConnected} />
        <Button title='Login' onPress={this.handleLogin} />
        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={this.handleSignIn} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default ConnexionView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
})
