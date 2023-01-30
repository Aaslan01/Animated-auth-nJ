/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import styles from './styles';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput } from 'react-native';
import Svg, { Image } from 'react-native-svg'
function App() {
  const { width, height } = Dimensions.get('window')
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height/2} width={width} >
          <Image href={require("./assets/login-background.jpg")}
            height={height } width={width} preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <View style={styles.closedCircleButton}>
          <Text style={{color: 'black'}}>X</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View> */}
        <View style={styles.registerContainer}>
          <TextInput placeholder='Full Name' placeholderTextColor={'black'} style={styles.inputText} />
          <TextInput placeholder='Email' placeholderTextColor={'black'} style={styles.inputText} />
          <TextInput placeholder='Password' placeholderTextColor={'black'} style={styles.inputText} />
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>Login In</Text>
          </View>
        </View>
      </View>
    </View>
  );
}



export default App;
