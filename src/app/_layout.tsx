import { SplashScreen, Stack } from 'expo-router';
import 'react-native-reanimated';

import { useEffect } from 'react';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="home" />
      <Stack.Screen name="destinations/[id]" />
      <Stack.Screen
        name="account"
        options={{
          headerShown: true,
          title: 'Minha conta',
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
