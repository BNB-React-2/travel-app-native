import { theme } from '@/theme';
import { IMAGE_SOURCES } from '@/values';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getCategories } from '../axios';
import { CategoryType } from '../categories.types';

export type CategoriesProps = {
  activeCategory: number | null;
  setActiveCategory: (value: number | null) => void;
};

export function Categories({
  activeCategory,
  setActiveCategory,
}: CategoriesProps) {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className="space-y-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text className="font-semibold text-neutral-700">Categorias</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category, index) => {
          const image = IMAGE_SOURCES.find((i) => i.id === category.imageId);
          const isActive = category.imageId === activeCategory;

          return (
            <TouchableOpacity
              key={category.imageId}
              className="flex items-center space-y-2"
              onPress={() => setActiveCategory(category.imageId)}
            >
              <View
                className={`border-4 rounded-3xl border-transparent ${
                  isActive ? 'bg-orange-500 border-orange-500' : ''
                }`}
              >
                <Image
                  source={image?.source}
                  className="rounded-3xl"
                  style={{ width: wp(20), height: wp(20) }}
                />
              </View>
              <Text className="text-neutral-700 font-medium">
                {category.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
