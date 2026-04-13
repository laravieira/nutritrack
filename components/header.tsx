import { useColorScheme } from '@/hooks/use-color-scheme'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgress from 'react-native-circular-progress-indicator'
import CurvedText from '@/components/ui/curved-text'

export default function Header() {
  const colorScheme = useColorScheme();

  return (

    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>
            NutriTrack
          </Text>
          <Image source={require('@/assets/images/icon.svg')} style={styles.logo} />
        </View>
        <View style={styles.progress}>
          <View style={styles.progressOuterText}>
            <CurvedText
              width={210}
              height={210}
              rotate={54}
              text="75% of daily goal"
              fill="#333333FF"
            />
          </View>
          <CircularProgress
            value={20}
            progressValueColor="#333333FF"
            title="kcal left"
            titleColor="#333333FF"
            titleStyle={{fontWeight: 'bold'}}
            inActiveStrokeColor={'#43b96d'}
            inActiveStrokeOpacity={0.2}
          />
        </View>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcefc4'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 36,
  },
  title: {
    color: 'rgb(0,0,0)',
    fontWeight: '800',
    fontSize: 36,
    fontFamily: 'Roboto',
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  progress: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressOuterText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  }
})