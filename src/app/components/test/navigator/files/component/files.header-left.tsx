import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const FilesHeaderLeft = ({ navigation }) => {
  const linkToCreate = () => {
    navigation.push('files-test', { screen: 'files-edit-test', params: { action: 'new' } });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex flex-row justify-center items-center mx-2 my-2">
          <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={linkToCreate} className="aspect-square p-[6px] rounded">
            <AntDesign name="plus" size={24} color="black" />
          </TouchableHighlight>
          <TextInput
            inputMode="search"
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default FilesHeaderLeft;
