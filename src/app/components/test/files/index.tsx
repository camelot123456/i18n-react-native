import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilesHeaderLeft from 'src/app/components/test/files/component/files.header-left';
import FilesScreen from 'src/app/components/test/files/files';
import FileDetail from 'src/app/components/test/files/files.detail';
import FileForm from 'src/app/components/test/files/files.form';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="/"
        options={{
          header: (props) => <FilesHeaderLeft {...props} />,
          headerShown: true,
        }}
      >
        {(props) => <FilesScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="detail">{(props) => <FileDetail {...props} />}</Stack.Screen>
      <Stack.Screen name="edit">{(props) => <FileForm {...props} />}</Stack.Screen>
    </Stack.Navigator>
  );
};
