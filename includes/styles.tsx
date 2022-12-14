import React, {type PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
  Dimensions
} from 'react-native';
const {width,height} = Dimensions.get("screen")
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"white"
    },
    heading1:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    heading2:{
        fontSize:16,
        color:"black",
        fontWeight:"bold"
    },
    subheading:{
        fontSize:14,
        color:"black"
    },
    textWrapper:{
        flexDirection:"row",
        flexWrap:"wrap"
    },
    backgroundImage:{
      width,
      height,
      position:"absolute",
      top:0,
      left:0  
    },
    headerContainer:{
        flexDirection:"column",
        backgroundColor:"#048bff",
        minHeight:50
    },
    headerDarkBck:{
        flexDirection:"row",
        backgroundColor:"#414141",
        minHeight:30
    },
    whiteText:{
       color:"white",
       fontSize:16 
    },
    thumbnail:{
      width:(width/4)-4,
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      padding:5
    },
    movieTitle:{
        color:"black",
        fontSize:12,
        textAlign:"center",
        marginBottom:10 
    },
    thumbnail_imge:
    {width:"100%",
    height:135,
    backgroundColor:"rgba(0,0,0,0.1)"
    },
    searchbarwrapper:{
     borderColor:"#ccc",
     borderRadius:5,
     borderWidth:0.5,
     height:50,
     margin:5,
     alignItems:"center",
     flexDirection:"row"
    },
    alert:{
        padding:5,
        backgroundColor:"rgba(255,112,118,0.4)",
        borderRadius:5,
        margin:5
    },
    alertText:{
        color:"red",
        fontSize:12
    },
    card:{
        padding:20,
        flexDirection:"column",
        backgroundColor:"white",
        borderRadius:20,
        elevation:2,
        minHeight:150,
        width:"100%",
        borderColor:"#ccc",
        borderWidth:1
    },
    inner:{
        width,
        height,
        backgroundColor:"rgba(0,0,0,0.02)",
    },
    hline:{
        height:1,
        backgroundColor:"#666",
        width:"100%",
        marginVertical:5
    }
})
export default styles;