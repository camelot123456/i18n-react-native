import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, Text, TouchableHighlight, View } from 'react-native';
import { useFilesStore } from 'src/app/components/test/files/files.store';

const FileDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const { t } = useTranslation();
  const { file, findFile, deleteFile } = useFilesStore();

  useEffect(() => {
    findFile(id);
  }, [id]);

  const handleDelete = () => {
    Alert.alert(t('test.files.detail.alert.title'), t('test.files.detail.alert.message', { id }), [
      {
        text: t('test.files.detail.alert.yesBtn'),
        onPress: () => {
          deleteFile(id);
          navigation.goBack();
        },
      },
      {
        text: t('test.files.detail.alert.cancelBtn'),
        onPress: () => {
          return;
        },
      },
    ]);
  };

  const linkToEditScreen = () => {
    navigation.push('files', { screen: 'edit', params: { id } });
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <View className="items-center mb-4">
        <Image source={{ uri: file?.logo }} className="w-40 h-40 rounded-lg" resizeMode="cover" />
      </View>

      <View className="mb-6">
        <Text className="text-2xl font-bold text-gray-800 mb-2">{file?.name || t('test.files.nameDefault')}</Text>
        <Text className="text-base text-gray-600">{file?.description || t('test.files.detail.descDefault')}</Text>
      </View>

      <View className="flex-row justify-between gap-x-4">
        <TouchableHighlight onPress={linkToEditScreen} className="rounded">
          <View className="px-10 py-4 rounded bg-blue-200">
            <Feather name="edit" size={24} color="blue" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={handleDelete} className="rounded">
          <View className="px-10 py-4 rounded bg-red-200">
            <FontAwesome name="trash-o" size={24} color="black" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.goBack()} className="rounded">
          <View className="px-10 py-4 rounded bg-gray-200">
            <AntDesign name="back" size={24} color="black" />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FileDetail;
