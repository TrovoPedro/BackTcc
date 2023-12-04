import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from '../screens/Login';
import LoginCreate from '../screens/Cadastrar';

export default function Routes(){

    const stack = createStackNavigator();

    return(
        
        <NavigationContainer>
            
            <stack.Navigator>
            

                <stack.Screen name ='/login' component ={LoginForm} options = {
                   {
                       headerShown:false,

                   } 
                }   />
                <stack.Screen name ='cadastrar' component = {LoginCreate}/>
                

            </stack.Navigator>


        </NavigationContainer>

    );
}