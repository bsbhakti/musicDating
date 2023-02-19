import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image,Button, ImageBackground, TextInput } from 'react-native';
import styles from './styles';
// import Svg from 'react-native-svg';

export default function App() {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      
         <View style = {StyleSheet.absoluteFill}>
   
    <ImageBackground source = {require('./assets/login-background.jpg')}
     style = {{width :"100%", height :"100%"}} ></ImageBackground>
          </View>
          <View style = {styles.formInputContainer}>
        <TextInput  placeholder = "Email" placeholderTextColor={"black"} style = {styles.textInput}/>
        <TextInput placeholder = "Password" placeholderTextColor={"black"} style = {styles.textInput}/>
        </View>
    <View style = {styles.bottomContainer}>
      <View style = {styles.button}>
        <Button title = "Login" color = "white" style = {styles.buttonText}>
        </Button>
      </View>
      <View style = {styles.button}>
        <Button title = "Register" color = "white" style = {styles.buttonText}> 
        </Button>
      </View>
      </View>

    
    </View>
  );
}


