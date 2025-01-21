import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar />
      <Image
        source={require('../assets/images/welcome.png')}
        className="h-full w-full absolute"
      />

      <View className="p-5 pb-10 space-y-8">
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.8)']}
          style={{
            width: wp(100),
            height: hp(60),
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
        <View className="space-y-3">
          <Text className="text-white font-bold" style={{ fontSize: wp(10) }}>
            Facilitando suas viagens!
          </Text>
          <Text
            className="text-neutral-200 font-medium"
            style={{ fontSize: wp(4) }}
          >
            Vivencie as melhores aventuras do mundo conosco!
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push('home')}
          className="bg-orange-500 mx-auto p-3 px-12 w-56 rounded-full"
        >
          <Text className="text-white font-bold" style={{ fontSize: wp(5.5) }}>
            Vamos lá
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
