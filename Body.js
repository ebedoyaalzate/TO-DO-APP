import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Body</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#98FB98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
