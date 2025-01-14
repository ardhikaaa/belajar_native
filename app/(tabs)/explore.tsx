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
          <View style={tw`flex items-center mt-10`}>
            <Image source={require('../../assets/images/logopesat.webp')} style={tw`w-40 h-40 rounded-full border-2 border-slate-500`}/>

            <View style={tw`flex items-center my-5`}>
              <Text style={tw`text-2xl font-semibold`}>SMK Pesat ITXPRO</Text>
              <Text style={tw`text-lg`}>"Sekolah Berbasis Agama Dengan Brading IT"</Text>
            </View>

            <View style={tw`flex-row justify-center w-100 gap-5`}>

            <View>
              <FontAwesome name="facebook" size={35} style={tw`bg-gray-300 rounded-full w-15 h-15 pt-3 pl-4 text-blue-900`}/>
            </View>
            
            <View>
              <FontAwesome name="linkedin" size={35} style={tw`bg-gray-300 rounded-full w-15 h-15 pt-3 pl-4 text-orange-500`}/>
            </View>

            <View>
              <FontAwesome name="twitter" size={35} style={tw`bg-gray-300 rounded-full w-15 h-15 pt-3 pl-4 text-blue-500`}/>
            </View>

            <View>
              <FontAwesome name="instagram" size={35} style={tw`bg-gray-300 rounded-full w-15 h-15 pt-3 pl-4 text-rose-700`}/>
            </View>

          </View>

          <View style={tw`flex-row w-full gap-15 justify-center mt-5 `}>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>11</Text>
              <Text style={tw`text-lg bottom-1`}>RPL</Text>
            </View>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>12</Text>
              <Text style={tw`text-lg bottom-1`}>DKV</Text>
            </View>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>13</Text>
              <Text style={tw`text-lg bottom-1`}>TKJ</Text>
            </View>
          </View>

          <View style={tw`flex-row gap-25 mt-5`}>
            <Link href="/explore/project" style={tw`text-blue-500 border rounded-lg  w-30 p-2 text-center text-lg font-medium`}>
              <Text>Projek</Text>
            </Link>

            <Link href="/explore/siswa" style={tw`text-white bg-blue-500 rounded-lg w-30 p-2 text-center text-lg font-medium`}>
              <Text>Siswa</Text>
            </Link>
          </View>

          <View style={tw`flex-row gap-3 mt-5`}>
            <View>
              <Image source={require('../../assets/images/pesat1.webp')} style={tw`w-30 h-30 rounded-lg`}/>
            </View>
            <View style={tw``}>
              <Image source={require('../../assets/images/pesat2.webp')} style={tw`w-30 h-30 rounded-lg`}/>
            </View>
            <View style={tw``}>
              <Image source={require('../../assets/images/pesat3.webp')} style={tw`w-30 h-30 rounded-lg`}/>
            </View>
          </View>

          <View style={tw`flex-row gap-3 mt-5`}>
            <View>
              <Image source={require('../../assets/images/pesat4.webp')} style={tw`w-30 h-30 rounded-lg`}/>
            </View>
            <View style={tw``}>
              <Image source={require('../../assets/images/pesat5.webp')} style={tw`w-30 h-30 rounded-lg`}/>
            </View>
            <View style={tw``}>
              <Image source={require('../../assets/images/pesat6.webp')} style={tw`w-30 h-30 rounded-lg`}/>
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
