import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View className="flex flex-1 bg-red-200 justify-center items-center">
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('language')} title="Test language" color="#841511" />
      <Button onPress={() => navigation.navigate('files')} title="Test CRUD" color="#78dc8b" />
    </View>
  );
}

export default HomeScreen;
