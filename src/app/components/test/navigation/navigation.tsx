import { Button, Text, View } from 'react-native';

function NavigationScreen({ navigation }) {
  return (
    <View className="flex-1 bg-blue-200 justify-center items-center">
      <Text>Navigation Test Screen</Text>
      <Button title="Go to Settings... again" onPress={() => navigation.push('settings')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default NavigationScreen;
