import React from 'react'
import { WebBrowser } from 'expo'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

class ConnexionView extends React.Component {
  handleConnected = () => {
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Connexion view</Text>
        {/* <Button title='Login' /> */}
        <Button title='Déjà connecté ?' onPress={this.handleConnected} />
        <View style={styles.helpContainer}>
          <TouchableOpacity
            onPress={this._handleHelpPress}
            style={styles.helpLink}
          >
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
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
