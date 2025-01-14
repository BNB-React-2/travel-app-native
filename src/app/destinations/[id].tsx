import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DestinationScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Destination {id} screen</Text>
    </View>
  );
}
