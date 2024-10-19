import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  const PROFILES = process.env.EXPO_PUBLIC_PROFILES;
  const { t } = useTranslation();
  return (
    <View className="flex flex-1 bg-red-200 justify-center items-center">
      <Text>
        {t('test.profiles')}: {PROFILES}
      </Text>
      <Button onPress={() => navigation.navigate('files')} title={t('test.home.testCrud')} color="#78dc8b" />
    </View>
  );
}

export default HomeScreen;
