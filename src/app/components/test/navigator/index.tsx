import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilesScreen from 'src/app/components/test/navigator/files/files';
import FolderScreen from 'src/app/components/test/navigator/folder/folder';
import HomeScreen from 'src/app/components/test/navigator/home/home';
import LanguageSelectionTest from 'src/app/components/test/navigator/language/language-selection-test';
import SettingScreen from 'src/app/components/test/navigator/settings/settings';

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
      <Stack.Screen name="home-test" options={{ title: 'Home' }}>
        {(props) => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="settings-test" options={{ title: 'Settings' }}>
        {(props) => <SettingScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="language-test" options={{ title: 'Language' }}>
        {(props) => <LanguageSelectionTest {...props} />}
      </Stack.Screen>
      <Stack.Screen name="folder-test" options={{ title: 'Folder' }} initialParams={{ initParam: 'Hello' }}>
        {(props) => <FolderScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="files-test" options={{ title: 'Files Management' }}>
        {(props) => <FilesScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default NavigatorScreenTest;
