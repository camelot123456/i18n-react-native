import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'src/app/components/test/home/home';
import LanguageSelectionTest from 'src/app/components/test/language/language-selection-test';
import FilesRoutes from 'src/app/components/test/files/index';

const Stack = createNativeStackNavigator();

function NavigatorScreenTest() {
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
      <Stack.Screen name="home" options={{ title: 'Home' }}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="language" options={{ title: 'Language Test' }}>
        {(props) => <LanguageSelectionTest {...props} />}
      </Stack.Screen>
      <Stack.Screen name="files" options={{ title: 'Files Management' }} component={FilesRoutes} />
    </Stack.Navigator>
  );
}

export default NavigatorScreenTest;
