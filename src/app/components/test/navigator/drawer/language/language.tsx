import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const LanguageScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>();

  const DATA = [
    {
      lang: 'vi',
      name: t('test.language.langs.vi'),
    },
    {
      lang: 'en',
      name: t('test.language.langs.en'),
    },
  ];

  const changeLanguage = (item: { lang: string; name: string }) => {
    i18next.changeLanguage(item.lang);
    Alert.alert(t('test.language.titleAlert'), t('test.language.messageAlert', { name: item.name }));
  };

  return (
    <View className="flex-1 bg-blue-50 items-center justify-center">
      <Text className="text-lg font-bold">{t('test.language.header')}</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity className="w-[200px] p-2 rounded bg-blue-500 my-1" onPress={() => changeLanguage(item)}>
            <Text className="text-center text-white">{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.lang}
        extraData={selectedLang}
      />
    </View>
  );
};

export default LanguageScreen;
