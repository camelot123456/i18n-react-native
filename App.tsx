import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'src/app/config/i18next';
import NavigatorScreenTest from 'src/app/components/test';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="test" options={{ headerShown: false }} component={NavigatorScreenTest} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
