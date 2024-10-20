import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import HeaderLeft from 'src/app/components/test/navigator/component/header-left';
import FilesRoutes from 'src/app/components/test/navigator/drawer/files/index';
import LanguageScreen from 'src/app/components/test/navigator/drawer/language/language';

const Tab = createBottomTabNavigator();

export default (drawerProps) => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="files"
      screenOptions={{
        headerLeft: () => <HeaderLeft {...drawerProps} />,
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
      <Tab.Screen name="files" options={{ title: t('test.files.title', 'Files Management') }} component={FilesRoutes} />
      <Tab.Screen name="language" options={{ title: t('test.language.title', 'Language') }}>
        {(props) => <LanguageScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
