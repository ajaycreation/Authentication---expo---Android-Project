import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Dashboard!</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')} // Navigate back to Login
      />
    </View>
  );
};

export default DashboardScreen;
