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

            <View>
                <Text style={tw`text-3xl font-semibold text-center mb-5`}>
                    Siswa RPL
                </Text>
            </View>

            <View style={tw`flex-row gap-5 justify-center mb-5`}>
                <View>
                <Link href="/explore/siswa1">
                    <Image source={require('../../assets/images/w.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                </Link>
                <Text style={tw`text-xl mt-2`}>W</Text>
                </View>
                <View>
                <Image source={require('../../assets/images/w.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                <Text style={tw`text-xl mt-2`}>W</Text>
                </View>
            </View>

            <View style={tw`flex-row gap-5 justify-center mb-5`}>
                <View>
                <Image source={require('../../assets/images/dokutah.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                <Text style={tw`text-xl mt-2`}>Dokutah</Text>
                </View>
                <View>
                <Image source={require('../../assets/images/dokutah.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                <Text style={tw`text-xl mt-2`}>Dokutah</Text>
                </View>
            </View>

            <View style={tw`flex-row gap-5 justify-center mb-5`}>
                <View>
                <Image source={require('../../assets/images/kaltsit.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                <Text style={tw`text-xl mt-2`}>Kal'tsit</Text>
                </View>
                <View>
                <Image source={require('../../assets/images/kaltsit.jpeg')} style={tw`w-45 h-45 rounded-lg`}/>
                <Text style={tw`text-xl mt-2`}>Kal'tsit</Text>
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
