import { Entypo } from '@expo/vector-icons';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Alert, Text, TouchableHighlight, View } from 'react-native';

function LanguageSelectionTest() {
  const { t } = useTranslation();
  return (
    <>
      <Text>{t('initApp')}</Text>
      <TouchableHighlight
        className="border border-blue-800 rounded bg-blue-300 w-[100px] h-[30px] text-center m-4 px-px"
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() =>
          Alert.alert(
            'Language',
            'Language Selection',
            [
              {
                text: 'English',
                onPress: () => i18next.changeLanguage('en'),
              },
              {
                text: 'Tiếng Việt',
                onPress: () => i18next.changeLanguage('vi'),
              },
            ],
            {
              cancelable: true,
            }
          )
        }
      >
        <View className="mx-auto">
          <Entypo name="language" size={24} color="black" />
        </View>
      </TouchableHighlight>
    </>
  );
}

export default LanguageSelectionTest;
