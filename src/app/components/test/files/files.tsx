import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useFilesStore } from 'src/app/components/test/files/files.store';

function FilesScreen({ navigation }) {
  const { files } = useFilesStore();

  const handleFileDetail = (id: string) => {
    navigation.push('files', { screen: 'detail', params: { id, action: 'edit' } });
  };

  return (
    <SafeAreaView className="h-full w-full bg-blue-50">
      <ScrollView>
        {files?.map((file) => (
          <TouchableOpacity
            key={file?.id}
            className="bg-blue-100 w-100 p-2 mx-2 my-1 rounded flex flex-row shadow"
            onPress={() => handleFileDetail(file?.id)}
          >
            <Image
              className="aspect-square rounded w-[70px] mr-2"
              source={{
                uri: file?.logo,
              }}
            />
            <View className="flex-1">
              <Text className="text-[16px] font-bold">{file?.name}</Text>
              <Text className="text-gray-500" numberOfLines={2} ellipsizeMode="tail">
                {file?.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FilesScreen;
