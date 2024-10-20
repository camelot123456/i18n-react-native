import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import DrawNavigator from 'src/app/components/test/navigator/drawer/index';

const Stack = createNativeStackNavigator();

function NavigatorScreenTest() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="drawer" options={{ headerShown: false }} component={DrawNavigator} />
    </Stack.Navigator>
  );
}

export default NavigatorScreenTest;
