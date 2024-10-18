import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LanguageSelectionTest from 'src/app/components/test/language-selection-test';
import 'src/app/config/i18next';

export default function App() {
  return (
    <View className="flex flex-1 bg-red-200 justify-center items-center">
      <LanguageSelectionTest />
      <StatusBar style="auto" />
    </View>
  );
}
