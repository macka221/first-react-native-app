import { Text, View, Platform } from "react-native";
import { ProfileCard } from './components/ProfileCard/profile-card';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './app.styles';
import { useState } from 'react';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        {Platform.OS === 'android' && <Text>On Android Device</Text>}
        {Platform.OS === 'ios' && <Text>On Iphone or other IOS device</Text>}
        <ProfileCard 
          firstName={'Zach'}
          lastName={'Lofton'}
          age={30}
          isOpenToWork
        >
         <View style={style.workAvailability} />
        </ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


