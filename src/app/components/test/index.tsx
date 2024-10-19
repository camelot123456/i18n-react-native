import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'src/app/components/test/home/home';
import FilesRoutes from 'src/app/components/test/files/index';
import { useTranslation } from 'react-i18next';

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
      <Stack.Screen name="home" options={{ title: t('test.home.title', 'Home') }}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="files" options={{ title: t('test.files.title', 'Files Management') }} component={FilesRoutes} />
    </Stack.Navigator>
  );
}

export default NavigatorScreenTest;
