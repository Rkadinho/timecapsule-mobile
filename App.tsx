import { StatusBar } from 'expo-status-bar';
import { 
  ImageBackground, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind';

import blurBg from './src/assets/bg-blur.png';
import Stripes from './src/assets/stripes.svg';
import Logo from './src/assets/timeCapsule-logo.svg';

const StyledStripes = styled(Stripes)

export default function App() {

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if(!hasLoadedFonts) {
    return null
  };

  return (
    <ImageBackground source={blurBg}
      className="bg-gray-900 flex-1 items-center relative px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}>
      <StyledStripes className='absolute left-2'/>
      <View className='flex-1 items-center justify-center gap-6'>
        <Logo />
        <View className='space-y-2'>
          <Text className='text-gray-50 font-title text-center text-2xl leading-tight'>
            Sua cápsula do tempo
          </Text>
          <Text className='text-gray-100 font-body text-center text-base leading-relaxed'>
            Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}
          className='rounded-full bg-green-500 px-5 py-2'>
          <Text className='font-alt text-sm uppercase text-black'>
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>Feito no NLW da Rocketseat</Text>
      <StatusBar style="light" />
    </ImageBackground>
  )
};
