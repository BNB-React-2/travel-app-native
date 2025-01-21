import { ActivityIndicator, Text, View } from 'react-native';

export function Loading() {
  return (
    <View className="flex items-center justify-center flex-row gap-x-2 w-full h-full">
      <ActivityIndicator size="large" />
      <Text>Carregando...</Text>
    </View>
  );
}
