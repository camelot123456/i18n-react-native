import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRoutes from 'src/app/components/test/navigator/drawer/tab/index';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      initialRouteName="tab"
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
      <Drawer.Screen name="tab" options={{ headerShown: false, drawerItemStyle: { display: 'none' } }}>
        {(props) => <TabRoutes {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
