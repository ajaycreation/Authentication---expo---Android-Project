import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen'; // Ensure this is imported

const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen
              {...props}
              setAuthenticated={setIsAuthenticated}
              userCredentials={userCredentials}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {(props) => (
            <RegisterScreen
              {...props}
              setUserCredentials={setUserCredentials}
            />
          )}
        </Stack.Screen>
        {/* The Dashboard screen should always be registered */}
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
