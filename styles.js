import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-end'
    },
    button:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        height:55,
        alignItems:'center',
        justifyContent:'center' ,
        borderRadius: 35,
        marginTop: 10,
        marginBottom:15,
        borderWidth: 1,
        borderColor :'white'

      },
      buttonText:{
        fontSize:20,
        fontWeight:'600',
        color: 'white',
        letterSpacing: 0.5

      },
      bottomContainer:{
        justifyContent:'center',
        // height: height/3
      },
      textInput:{
        height:50,
        borderWidth:1,
        borderColor: "rgba(0,0,0,0.2)",
        marginHorizontal:10,
        marginVertical:10,
        borderRadius: 35,
        paddingLeft: 5,
        backgroundColor: "white"

      },
      formButton:{
        backgroundColor: 'rgba(123,104,238,0.8)',
        // height:55,
        alignItems:'center',
        justifyContent:'center' ,
        borderRadius: 35,
        // marginTop: 10,
        // marginBottom:15,
        borderWidth: 1,
        borderColor :'white'
      },
      formInputContainer:{
        marginBottom:20,
        // height: height/3
      },
      closeButtonContainer:{
        height:40,
        width:40,
        justifyContent:'center',
        alignSelf:'center',


      }

  });


export default styles