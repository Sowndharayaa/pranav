import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>🎧🇩͏🇯📀 SOUNDS🎶</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainer:{
    backgroundColor:'maroon',
    width:1000,
    marginBottom:50
  },
  text:{
    color:'white',
    padding:10 ,
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
  }
});

export default AppHeader;