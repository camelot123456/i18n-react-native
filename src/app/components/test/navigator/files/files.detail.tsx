import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';
import { Alert, Button, Image, Text, TouchableHighlight, View } from 'react-native';
import { useFilesStore } from 'src/app/components/test/navigator/files/files.store';

const FileDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const { file, findFile, deleteFile } = useFilesStore();

  useEffect(() => {
    findFile(id);
  }, [id]);

  const handleDelete = () => {
    Alert.alert('Delete Confirm', `Do you want delete this file [${id}]?`, [
      {
        text: 'Yes',
        onPress: () => {
          deleteFile(id);
          navigation.goBack();
        },
      },
      {
        text: 'Cancel',
        onPress: () => {
          return;
        },
      },
    ]);
  };

  const linkToEditScreen = () => {
    navigation.push('files-test', { screen: 'files-edit-test', params: { id } });
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <View className="items-center mb-4">
        <Image source={{ uri: file?.logo }} className="w-40 h-40 rounded-lg" resizeMode="cover" />
      </View>

      <View className="mb-6">
        <Text className="text-2xl font-bold text-gray-800 mb-2">{file?.name || 'Unnamed Folder'}</Text>
        <Text className="text-base text-gray-600">{file?.description || 'No description available.'}</Text>
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
