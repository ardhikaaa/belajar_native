import { StyleSheet, Image, Platform, View, Text, ScrollView} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from 'react-native-safe-area-context';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';
import { AntDesign, FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { createNativeWrapper } from 'react-native-gesture-handler';
import tw from "twrnc";
import { Link } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
        <ScrollView>
          <View>

            <Text style={tw`text-3xl font-semibold text-center`}>
                Keunggulan RPL
            </Text>

            <View style={tw`flex items-center mt-5 mx-5 gap-8`}>
                <Image source={require('../../assets/images/uiux1.webp')} style={tw`w-full h-70 rounded-xl`}/>
                <Text style={tw`text-xl`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla, veniam impedit provident, fugiat reprehenderit quaerat molestias perferendis repellendus consequuntur minima incidunt adipisci officiis consequatur, quidem quos voluptates asperiores amet.</Text>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  
  reactLogo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginBottom: 12,
  },
});
