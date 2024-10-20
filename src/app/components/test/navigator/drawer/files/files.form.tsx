import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import uuid from 'react-native-uuid';
import { FilesTest, useFilesStore } from 'src/app/components/test/navigator/drawer/files/files.store';

function FileForm({ route, navigation }) {
  const { id, action } = route.params;
  const { t } = useTranslation();
  const { file, updateFile, addFile } = useFilesStore();
  const [form, setForm] = useState<FilesTest>(undefined);

  const handleSubmit = () => {
    if (action == 'new') {
      addFile({ ...form });
    } else {
      updateFile({ ...form });
    }
    navigation.goBack();
  };

  useEffect(() => {
    if (action == 'new') {
      setForm({
        id: uuid.v4().toString(),
        name: '',
        description: '',
        logo: `https://picsum.photos/id/${(Math.random() * 100).toFixed()}/50/50`,
      });
      return;
    }
    setForm({
      id: file?.id,
      name: file?.name,
      description: file?.description,
      logo: file?.logo,
    });
  }, [file, id]);

  return (
    <ScrollView className="max-w-sm mx-auto w-full">
      <View className="p-4">
        <View className="mb-5 mx-auto">
          <Image source={{ uri: file?.logo }} className="w-40 h-40 rounded-lg" resizeMode="cover" />
        </View>
        <View className="mb-5">
          <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('test.files.form.name')}</Text>
          <TextInput
            value={form?.name}
            onChangeText={(name) => setForm((prev) => ({ ...prev, name }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t('test.files.form.placeholder.name')}
          />
        </View>
        <View className="mb-5">
          <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('test.files.form.description')}</Text>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            placeholder={t('test.files.form.placeholder.description')}
            value={form?.description}
            onChangeText={(description) => setForm((prev) => ({ ...prev, description }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </View>
        <View className="mb-5">
          <Text className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('test.files.form.logo')}</Text>
          <TextInput
            placeholder={t('test.files.form.placeholder.logo')}
            value={form?.logo}
            onChangeText={(logo) => setForm((prev) => ({ ...prev, logo }))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </View>
        <View className="flex-row gap-x-2">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex-1 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Text className="text-center text-white">{t('test.files.form.backBtn')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            className="flex-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Text className="text-center text-white">{t('test.files.form.submitBtn')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default FileForm;
