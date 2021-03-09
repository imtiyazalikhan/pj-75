import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {

    constructor(){
        super();
        this.state={
            emailId:'' ,
            password:'' ,
        }
    }

    userSingup=(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("user add")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert("successfully login ")
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }

    render(){
        return(
         <View style={styles.container}>
             <View style={styles.profileContainer} >
                 <Text style={styles.title} >story hub</Text>
             </View>
             <View>
             <TextInput
            style={styles.loginbox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={(text)=>{
                this.setState({
                    emailId:text
                })
            }}
            
            />
            <TextInput
            style={styles.loginbox}
            placeholder="enter password"
            secureTextEntry={true}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            />
            <TouchableOpacity style={styles.button}
            onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}>
                <Text style={styles.buttonText} >login</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button}
            onPress={()=>{this.userSingup(this.state.emailId,this.state.password)}}>
                <Text style={styles.buttonText} >Singup</Text>
            </TouchableOpacity>
             </View>
             
         </View>

        )
    }

}
const styles=StyleSheet.create({
    container:{
         flex:1,backgroundColor:'#F8BE85' },
    title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
loginbox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, },
buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 },
})