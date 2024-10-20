import { AntDesign } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

const HeaderLeft = (props) => {
  const { navigation } = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View className="ml-4">
      <Pressable onPress={openDrawer} className="aspect-square  rounded">
        <AntDesign name="bars" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default HeaderLeft;
