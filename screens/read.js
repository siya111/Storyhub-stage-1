import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';

export default class Read extends React.Component {
    render() {
      return (
        <View >
          <Header 
            backgroundColor = {'#CC99FF'}
           centerComponent = {{
           text : 'Story Hub',
           style : { color: 'black', fontSize: 30}
           }}
          />
        
          <Text style={styles.container}>View more stories</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {  
      alignItems: 'center'

    },
  })