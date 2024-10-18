import { Button, Text, View } from 'react-native';

function SettingScreen({ navigation }) {
  return (
    <View className="flex-1 bg-blue-200 justify-center items-center">
      <Text>Setting Screen</Text>
      <Button title="Go to Settings... again" onPress={() => navigation.push('settings-test')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('home-test')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default SettingScreen;
