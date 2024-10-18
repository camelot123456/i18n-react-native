import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'src/app/config/i18next';
import NavigatorScreenTest from 'src/app/components/test/navigator';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NavigatorScreenTest />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
