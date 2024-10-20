import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import LanguageScreen from 'src/app/components/test/navigator/drawer/language/language';
import FilesRoutes from 'src/app/components/test/navigator/drawer/files/index';

const Drawer = createDrawerNavigator();

export default () => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName="files"
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
      <Drawer.Screen name="files" options={{ title: t('test.files.title', 'Files Management') }} component={FilesRoutes} />
      <Drawer.Screen name="language" options={{ title: t('test.language.title', 'Language') }}>
        {(props) => <LanguageScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
