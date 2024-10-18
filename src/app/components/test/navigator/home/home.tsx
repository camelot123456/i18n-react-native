import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View className="flex flex-1 bg-red-200 justify-center items-center">
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('settings-test')} title="Test navigator" color="#841584" />
      <Button onPress={() => navigation.navigate('language-test')} title="Test language" color="#841511" />
      <Button
        onPress={() => navigation.navigate('folder-test', { name: 'powB', message: 'From Home Screen' })}
        title="Test share params"
        color="#815511"
      />
      <Button onPress={() => navigation.navigate('files-test')} title="Test CRUD" color="#78dc8b" />
    </View>
  );
}

export default HomeScreen;
