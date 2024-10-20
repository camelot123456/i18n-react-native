import { AntDesign, Entypo } from '@expo/vector-icons';
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
        tabBarShowLabel: false,
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
      <Tab.Screen
        name="files"
        options={{
          title: t('test.files.title', 'Files Management'),
          tabBarIcon: (props) => <AntDesign name="file1" size={props.focused ? 22 : 20} color={props.color} />,
        }}
        component={FilesRoutes}
      />
      <Tab.Screen
        name="language"
        options={{
          title: t('test.language.title', 'Language'),
          tabBarIcon: (props) => <Entypo name="language" size={props.focused ? 22 : 20} color={props.color} />,
        }}
      >
        {(props) => <LanguageScreen {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
