import { Text, View } from "react-native";
import { ProfileCard } from './components/ProfileCard/profile-card';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { style } from './app.styles'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <ProfileCard />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


