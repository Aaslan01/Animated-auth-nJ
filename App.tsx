/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import styles from './styles';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput, Pressable } from 'react-native';
import Svg, { Image, ClipPath, Ellipse } from 'react-native-svg'
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay } from 'react-native-reanimated';
import { transformer } from './metro.config';

function App() {
  const [isRegister, setRegister] = useState(true)
  const { width, height } = Dimensions.get('window')
  const imagePosition = useSharedValue(1)

  const imageAnimated = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0])
    return {
      transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }]
    }
  })

  const buttonAnimated = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [{translateY: withTiming(interpolation, { duration: 1000})}]
    }
  })

  const closeButtonAnimated = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [1,0], [0,180])
    return{
      transform: [{rotate: withTiming(interpolation + 'deg', {duration: 1500})}]
    }
  })

  const formAnimated = useAnimatedStyle(()=>{
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, {duration: 800})) : withTiming(0, {duration: 300})
    }
  })

  const loginHandle = () => {
    imagePosition.value = 0;
    setRegister(false)
  }
  const registerHandle = () => {
    imagePosition.value = 0;
    setRegister(true)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimated]}>
        <Svg height={height + 100} width={width} >
          <ClipPath id='clipPathId'>
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image href={require("./assets/login-background.jpg")}
            height={height + 100} width={width} preserveAspectRatio="xMidYMid slice" clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View style={[styles.closedCircleButton, closeButtonAnimated]} >
          <Text onPress={()=>imagePosition.value = 1} style={{ color: 'black', fontSize:25, marginBottom:-5 }}>^</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonAnimated}>
          <Pressable style={styles.button} onPress={loginHandle}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={registerHandle}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </Animated.View>

        <Animated.View  style={[styles.registerContainer, formAnimated]}>
          {isRegister && <TextInput placeholder='Full Name' placeholderTextColor={'black'} style={styles.inputText} />}
          <TextInput placeholder='Email' placeholderTextColor={'black'} style={styles.inputText} />
          <TextInput placeholder='Password' placeholderTextColor={'black'} style={styles.inputText} />
          <View style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>{isRegister ? 'Register': 'LOG IN'}</Text>
          </View>

        </Animated.View>
      </View>
    </View>
  );
}



export default App;
