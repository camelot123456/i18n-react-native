import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { TextInput, TouchableHighlight, View } from 'react-native';

const FilesHeaderLeft = ({ navigation }) => {
  const { t } = useTranslation();

  const linkToCreate = () => {
    navigation.push('edit', { action: 'new' });
  };

  return (
    <View className="flex flex-row justify-center items-center mx-2 my-2">
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={linkToCreate} className="aspect-square p-[6px] rounded">
        <AntDesign name="plus" size={24} color="black" />
      </TouchableHighlight>
      <TextInput
        inputMode="search"
        className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={t('test.files.headerLeft.search')}
      />
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={null} className="aspect-square p-[6px] rounded">
        <Feather name="search" size={24} color="black" />
      </TouchableHighlight>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={null} className="aspect-square p-[6px] rounded">
        <Feather name="filter" size={24} color="black" />
      </TouchableHighlight>
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={null} className="aspect-square p-[6px] rounded">
        <FontAwesome name="sort-amount-asc" size={24} color="black" />
      </TouchableHighlight>
    </View>
  );
};

export default FilesHeaderLeft;
