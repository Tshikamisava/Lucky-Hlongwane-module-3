import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Dashboard = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Dashboard')}>

                <Text style={{color:'white'}}>Services</Text>
            </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Dashboard')}>

                <Text style={{color:'white'}}>Contacts</Text>
            </TouchableOpacity>
                </View>
            </View> 

            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Dashboard')}>

                <Text style={{color:'white'}}>Contacts</Text>
            </TouchableOpacity>
                </View>
            </View> 
        </View>
        

        
    );
};

const styles = StyleSheet.create({
    container: {
       width: '100%',
       height: '85%',
       padding: 5,
       flexDirection: 'row',
      backgroundColor: '#eee',
    },
    box: {
        width: '50%',
        height: '50%',
        padding: 5,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#4ce8bc',
        alignItems: 'center',
        justifyContent: 'center',

    }
});
export default Dashboard;