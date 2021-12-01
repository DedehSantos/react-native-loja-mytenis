import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Home from './pages/Home';
import Detail from './pages/Detail';

const Stake = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
        <Stake.Navigator>
            <Stake.Screen
              name="Home"
              component={Home}
              options={{headerShown:false}}
            />
            <Stake.Screen
              name="Detail"
              component={Detail}
             
            />
        </Stake.Navigator>
    </NavigationContainer>

    )
    }

export default Routes;