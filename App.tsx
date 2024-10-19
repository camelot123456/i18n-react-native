import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import NavigatorScreenTest from 'src/app/components/test/navigator';
import 'src/app/config/i18next';

const Stack = createNativeStackNavigator();

export default function App() {
  const PROFILES = process.env.EXPO_PUBLIC_PROFILES;

  return (
    <>
      <NavigationContainer>
        {PROFILES.split(',').includes('test') && (
          <Stack.Navigator>
            <Stack.Screen name="test" options={{ headerShown: false }} component={NavigatorScreenTest} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
