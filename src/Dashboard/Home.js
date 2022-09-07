import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import serviceData from './Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
    return(
        <SafeAreaView>
            <FlatList 
            data={serviceData}
            contentInset={{padding: 12}}
            renderItem={({}) =>{
                return(
                    <TouchableOpacity style={{margin:10, height:windowHeight * 0.2,backgroundColor:item.backgroundColor, borderRadius:10}}>
                        
                        <View style={{backgroundColor:item.backgroundColor}}>
                        <Text style={styles.category}>
                            {item.category}
                        </Text>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text>
                            {item.numberCompany}
                        </Text>
                        
                        </View>
                        <image style={{
                            height:90, width:60, position:'absolute', right:0, margin:10, bottom:0
                        }} source={item.image}/>
                    </TouchableOpacity>
                )
            }}
            >

            </FlatList>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       
      
      //backgroundColor: '#eee',
    },
    category:{
        fontSize:24,
        fontWeight:'200',
        color: 'white'
    },
    name:{
      fontSize:16, 
      fontWeight:'500', 
    }
});
export default Home;
