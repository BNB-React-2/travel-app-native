import { Loading } from '@/components/Loading';
import { getDestinationByID } from '@/features/destinations/axios';
import { DestinationType } from '@/features/destinations/destinations.types';
import { theme } from '@/theme';
import { IMAGE_SOURCES } from '@/values';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DestinationScreen() {
  const [loading, setLoading] = useState(true);
  const [destination, setDestination] = useState<DestinationType | undefined>(
    undefined
  );

  const { id } = useLocalSearchParams<{ id: string }>();
  const destinationId = Number(id);

  const getDestinationData = () =>
    getDestinationByID(destinationId)
      .then((data) => setDestination(data))
      .catch(console.log);

  useEffect(() => {
    setLoading(true);
    getDestinationData().finally(() => setLoading(false));
  }, []);

  const router = useRouter();

  console.log(loading);

  const image =
    destination && IMAGE_SOURCES.find((i) => i.id === destination.imageId);

  if (loading) return <Loading />;

  if (!destination && !loading)
    return <Text>Ocorreu um erro ao carregar o destino</Text>;

  return (
    <View className="bg-white flex-1">
      <Image
        source={image?.source}
        style={{
          width: wp(100),
          height: hp(55),
        }}
      />
      <StatusBar style="light" />

      <SafeAreaView className="pt-5 flex-row justify-between items-center w-full absolute">
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            width: 45,
            height: 45,
          }}
          className="pr-1 ml-4 rounded-full flex items-center justify-center"
        >
          <FontAwesome
            name="chevron-left"
            size={wp(7)}
            strokeWidth={4}
            color="white"
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="pt-8 px-5 flex-1 justify-between bg-white -mt-14"
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
          <View className="flex-row justify-between items-start mb-4">
            <Text
              className="font-bold flex-1 text-neutral-500"
              style={{ fontSize: wp(7) }}
            >
              {destination?.title}
            </Text>
            <Text
              style={{ fontSize: wp(7), color: theme.text }}
              className="font-semibold"
            >
              ${destination?.price}
            </Text>
          </View>
          <Text
            style={{ fontSize: wp(3.7) }}
            className="text-neutral-700 tracking-wide mb-8"
          >
            {destination?.longDescription}
          </Text>
          <View className="flex-row justify-between mx-1">
            <View className="flex-row space-x-2 items-start">
              <FontAwesome name="clock-o" size={wp(7)} color="skyblue" />
              <View className="flex ml-2 space-y-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.duration}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Duration</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start">
              <FontAwesome name="map" size={wp(7)} color="#f87171" />
              <View className="flex space-y-2 ml-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.distance}
                </Text>
                <Text className="text-neutral-600 tracking-wide">Distance</Text>
              </View>
            </View>

            <View className="flex-row space-x-2 items-start">
              <FontAwesome name="sun-o" size={wp(7)} color="orange" />
              <View className="flex space-y-2 ml-2">
                <Text
                  style={{ fontSize: wp(4.5) }}
                  className="font-bold text-neutral-700"
                >
                  {destination?.weather}
                </Text>
                <Text className="text-neutral-600 tracking-wide">
                  {Number(destination?.weather.split(' ')[0]) > 25
                    ? 'Sunny'
                    : 'Cold'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            backgroundColor: theme.bg('0.8'),
            height: wp(15),
            width: wp(50),
          }}
          className="mb-6 mx-auto rounded-full items-center justify-center flex"
        >
          <Text style={{ fontSize: wp(5.5) }} className="font-bold text-white">
            Reserve agora
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
