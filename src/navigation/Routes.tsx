import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../components/screens/Dashboard'
import NotesDetailScreen from '../components/screens/NotesDetailScreen'
import { AuthParamList } from "./AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

export const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='NotesDetailScreen' component={NotesDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};