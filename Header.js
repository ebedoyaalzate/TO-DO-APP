import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
        style={styles.texto}
        onChangeText={this.props.cambiarTexto}
        placeholder="Aqui escribe tu texto..."/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#00FF00',
      justifyContent: 'center',
    },
    texto:{
        paddingHorizontal: 16,
    }
  });
  