import { Button, Text, View } from 'react-native';

function FolderScreen({ route, navigation }) {
  const { name, message, initParam } = route.params;
  return (
    <View className="flex-1 bg-blue-200 justify-center items-center">
      <Text>Folder Screen</Text>
      <Text>initParam: {initParam}</Text>
      <Text>name: {name}</Text>
      <Text>message: {message}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('home-test')} />
    </View>
  );
}

export default FolderScreen;
