import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class App extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={this.props.style}
        onPress={async () => {
            await Audio.Sound.createAsync(
              {uri:this.props.uri},
              { shouldPlay: true }
            );
          }}>
          <Text style={{ color: 'white', fontSize: 32, marginLeft: 40 }}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
