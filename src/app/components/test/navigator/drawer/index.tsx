import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import LanguageScreen from 'src/app/components/test/navigator/drawer/language/language';
import HomeScreen from 'src/app/components/test/navigator/drawer/home/home';

const Drawer = createDrawerNavigator();

export default () => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName="home"
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
      <Drawer.Screen name="home" options={{ title: t('test.home.title', 'Home') }}>
        {(props) => <HomeScreen {...props} />}
      </Drawer.Screen>
      <Drawer.Screen name="language" options={{ title: t('test.language.title', 'Language') }}>
        {(props) => <LanguageScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
