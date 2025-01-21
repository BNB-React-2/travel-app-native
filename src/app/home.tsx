import { Categories } from '@/features/categories/components/Categories';
import { FilterTags } from '@/features/categories/components/FilterTags';
import { DestinationList } from '@/features/destinations/components/List';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ios = Platform.OS === 'ios';
const topMargin = ios ? 'pt-3' : 'pt-14';

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState<number | null>(0);

  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false} className={topMargin}>
        <View className="mx-5 flex-row justify-between items-center mb-10">
          <Text
            style={{ fontSize: wp(7) }}
            className="font-bold text-neutral-700"
          >
            Descubra
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/avatar.png')}
              style={{ height: wp(12), width: wp(12) }}
            />
          </TouchableOpacity>
        </View>

        {/* Searchbar */}
        <View className="mx-5 mb-4">
          <View className="flex-row items-center bg-neutral-200 rounded-full p-4 space-x-2 pl-6">
            <FontAwesome name="search" size={20} strokeWidth={3} color="gray" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar um destino"
              placeholderTextColor="gray"
              className="flex-1 text-base pl-1 tracking-wider"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="mb-4">
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>

        {/* Filter Tags */}
        <View className="mb-4">
          <FilterTags activeTag={activeTag} setActiveTag={setActiveTag} />
        </View>

        {/* Destinations List */}
        <View>
          <DestinationList
            search={search}
            activeCategory={activeCategory}
            activeTag={activeTag}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
