import React from 'react';
import { Text, View,TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-element';
import db from '../config';
import firebase from 'firebase';


export default class WriteStory extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput>
            <Text>Title</Text>
          </TextInput>


          <TextInput>
            <Text>author</Text>
          </TextInput>
          
          
          <TextInput>
            <Text>write your story</Text>
          </TextInput>


          <TouchableOpacity 
          style={styles.submitbuttondesignes}
          onPress={this.submitStory}
          >
            <Text style={styles.buttondesigne} > Submit </Text>
          </TouchableOpacity>
         </View>
      );
    }
  }


  const styles = StyleSheet.create({
    buttondesigne: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    },
    submitbuttondesigne: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center"
    },
  });
  



