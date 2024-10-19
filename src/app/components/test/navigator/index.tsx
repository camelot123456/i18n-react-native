import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import DrawNavigator from 'src/app/components/test/navigator/drawer/index';
import FilesRoutes from 'src/app/components/test/navigator/files/index';

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
      <Stack.Screen name="Root" options={{ headerShown: false }} component={DrawNavigator} />
      <Stack.Screen name="files" options={{ title: t('test.files.title', 'Files Management') }} component={FilesRoutes} />
    </Stack.Navigator>
  );
}

export default NavigatorScreenTest;
