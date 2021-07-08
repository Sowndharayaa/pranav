import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import AppHeader from './components/header';
import B1 from './components/b1';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
          height: 1000,
          marginTop: 29,
        }}>
        <AppHeader />
        <B1
          style={{
            backgroundColor: 'dodgerblue',
            width: 200,
            height: 50,
            borderRadius: 100,
            marginBottom: 20,
          }}
          uri="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Rewind-7815-Free-Loops.com.mp3"
          text='Sound 1'
        />
        <B1
          style={{
            backgroundColor: 'green',
            width: 200,
            height: 50,
            borderRadius: 100,
            marginBottom: 20,
          }}
          uri="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dj%20Scratching%20Sample-23316-Free-Loops.com.mp3"
          text='Sound 2'
        />
        <B1
          style={{
            backgroundColor: 'red',
            width: 200,
            height: 50,
            borderRadius: 100,
            marginBottom: 20,
          }}
          uri="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Scratch%20Sound-23277-Free-Loops.com.mp3"
          text='Sound 3'
        />
        <B1
          style={{
            backgroundColor: 'blue',
            width: 200,
            height: 50,
            borderRadius: 100,
            marginBottom: 20,
          }}
          uri="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dj%20Scratch-21333-Free-Loops.com.mp3"
          text='Sound 4'
        />
        <TouchableOpacity
          style={{
            width: 180,
            backgroundColor: 'lightgreen',
            height: 40,
            marginTop: 30,
            borderRadius: 10,
          }}
          onPress={() => {
            Audio.setIsEnabledAsync(false);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              marginLeft: 25,
              marginTop: 2,
            }}>
            Stop Sounds
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 180,
            backgroundColor: 'lightgreen',
            height: 40,
            marginTop: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            Audio.setIsEnabledAsync(true);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              marginLeft: 25,
              marginTop: 2,
            }}>
            Start Sounds
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
