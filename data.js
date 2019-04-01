import { AsyncStorage } from 'react-native';

const getData = async () => {
  await AsyncStorage.setItem('val1', 'val1');
  const val1 = await AsyncStorage.getItem('val1');
  const val2 = await new Promise(resolve => setTimeout(() => resolve(), 2000));
  return { val1, val2 };
};

export default getData;
