import { cn } from '@/lib/utils';
import { theme } from '@/theme';
import { TAG_DATA } from '@/values';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export type FilterTagsProps = {
  activeTag: number | null;
  setActiveTag: (value: number | null) => void;
};

export function FilterTags({ activeTag, setActiveTag }: FilterTagsProps) {
  return (
    <View className="bg-neutral-200 mx-6 flex items-center">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="w-full flex-row justify-around items-center p-2 px-4 space-x-2">
          {TAG_DATA.map((tag) => {
            const isActive = tag.id === activeTag;
            const activeButtonClass = isActive ? 'bg-white shadow' : '';

            return (
              <TouchableOpacity
                onPress={() => setActiveTag(tag.id)}
                className={cn('p-3 space-x-4 rounded-full flex')}
                key={tag.id}
              >
                <Text
                  className="font-semibold"
                  style={{
                    fontSize: wp(4),
                    color: isActive ? theme.text : 'rgba(0,0,0,0,6)',
                  }}
                >
                  {tag.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
