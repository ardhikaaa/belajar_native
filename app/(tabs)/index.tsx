import { Image, StyleSheet, Platform, View, Text, ImageBackground, ScrollView} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc";
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View>
    <SafeAreaView>
      <ScrollView>

        <ImageBackground source={require('../../assets/images/Doctor.webp')} style={tw`h-175 bg-top`}>
        </ImageBackground>
      
        <View style={tw`bg-zinc-500 h-full rounded-t-[10] bottom-75 w-full p-12 border-t-2 border-black`}>
          <Text style={tw`text-4xl font-extrabold w-1/2`}>
            Ardhika Raditya
          </Text>
          <View style={tw`flex-row w-3/4 gap-6 items-center mt-2`}>
            <Text style={tw`mt-1 text-slate-900 text-lg font-semibold`}>
              Programmer
            </Text>
            <Text style={tw`mt-1 text-lg text-slate-900 font-semibold`}>
              <Entypo name='location-pin' style={tw`text-lg`} /> Babel
            </Text>
          </View>

          <View style={tw`flex-row w-full gap-6 items-center justify-between mt-5`}>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>11</Text>
              <Text style={tw`text-lg bottom-1`}>Kelas</Text>
            </View>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>RPL</Text>
              <Text style={tw`text-lg bottom-1`}>Jurusan</Text>
            </View>
            <View>
              <Text style={tw`text-2xl font-extrabold`}>3</Text>
              <Text style={tw`text-lg bottom-1`}>Proyek</Text>
            </View>
          </View>

          <View style={tw`mt-5`}>
            <Link href="/settings/profile">
            <Text style={tw`text-white bg-black w-25 p-2 text-center text-lg font-medium`}>Hire Me</Text>
            </Link>
          </View>

          <View style={tw`mt-8 flex-row items-center w-100 gap-5`}>
            <View>
              <FontAwesome name="facebook" size={24}/>
            </View>
            
            <View>
              <FontAwesome name="linkedin" size={24}/>
            </View>

            <View>
              <FontAwesome name="twitter" size={24}/>
            </View>
          </View>

          <View style={tw`mt-7`}>
            <View>
              <Text style={tw`text-2xl font-extrabold mb-1`}>ABOUT ME</Text>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis veniam iure vel quaerat nostrum sunt voluptas facere saepe sit! Fugit nulla ipsam magnam. Provident quo eveniet iure veritatis dolor?</Text>
            </View>

            <View style={tw`mt-5`}>
              <Text style={tw`text-2xl font-extrabold mb-1`}>PROJECT</Text>
              <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis veniam iure vel quaerat nostrum sunt voluptas facere saepe sit! Fugit nulla ipsam magnam. Provident quo eveniet iure veritatis dolor?</Text>
            </View>

            <View style={tw`mt-5`}>
              <Text style={tw`text-2xl font-extrabold mb-2`}>TOOLS</Text>
              <View style={tw`flex-row items-center w-100 gap-5`}>
                <Text>Visual Studio Code</Text>
                <Text>Android Studio</Text>
                <Text>Figma</Text>
              </View>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
    </View>
  );
}

const css = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 200,
    borderRadius: 100,
    marginBottom: 12,
  },
});
