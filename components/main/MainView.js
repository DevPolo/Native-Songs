import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class MainView extends React.Component {
  handleGoToSongs = () => {
    this.props.navigation.navigate('Songs')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Main view</Text>
        <Button title='Go to Songs' onPress={this.handleGoToSongs} />
      </View>
    )
  }
}

export default MainView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
