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
                Siswa RPL
            </Text>

            <View style={tw`flex items-center mt-5 mx-5 gap-8`}>
                <Image source={require('../../assets/images/w.jpeg')} style={tw`w-full h-70 rounded-xl`}/>
            <View style={tw`flex-row w-full gap-15 justify-center bg-rose-500 p-2 rounded-xl`}>
            <Text style={tw`absolute -top-11 border border-[1] border-gray-200 text-xl w-36 font-semibold text-center py-2 bg-rose-900 rounded-full text-white`}>Statistik</Text>
              <View>
                <Text style={tw`text-white text-2xl font-extrabold`}>3</Text>
                <Text style={tw`text-white text-lg bottom-1`}>Friends</Text>
              </View>
              <View>
                <Text style={tw`text-white text-2xl font-extrabold`}>1</Text>
                <Text style={tw`text-white text-lg bottom-1`}>Squad</Text>
              </View>
              <View>
                <Text style={tw`text-white text-2xl font-extrabold`}>100+</Text>
                <Text style={tw`text-white text-lg bottom-1`}>Kill</Text>
              </View>
          </View>
          <View style={tw`bg-rose-500 p-2 rounded-xl items-center mb-5`}>
            <Text style={tw`absolute -top-11 border border-[1] border-gray-200 text-xl w-36 font-semibold text-center py-2 bg-rose-900 rounded-full text-white`}>Tentang</Text>
            <Text style={tw`text-xl text-white`}>W, Sarkaz mercenary leader. W's squad, having been involved in Kazdel's lengthy civil war, 
              is infamous for their brutal and efficient combat methods. 
              W clashed with Rhodes Island during the Chernobog incident, but after defecting from Reunion for unknown reasons, 
              signed a strategic cooperation agreement with Rhodes Island after negotiating with Dr. Kal'tsit in person.</Text>
          </View>
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
