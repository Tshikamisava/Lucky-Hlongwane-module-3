import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.form}>
            <TextInput style={styles.input}
            placeholder="Email"
            />
            <TextInput style={styles.input}
            placeholder="Password"
            />
            </View>
            <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Dashboard')}>

                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            <Text>Don't have acco</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    input:{
        height: 40,
        margin: 12,
        //borderWidth: 1,
        borderBottomWidth:1,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#6200ea",
        padding: 10,
        margin:10,
        borderRadius: 10,
        
    },
    form:{
        margin:16,
        paddingTop:windowHeight/3
    }

});

export default Login;