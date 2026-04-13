import { useColorScheme } from '@/hooks/use-color-scheme'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import CircularProgress from 'react-native-circular-progress-indicator'
import CurvedText from '@/components/ui/curved-text'
import { ThemedText } from '@/components/themed-text'
import LinearProgress from '@/components/ui/linear-progress'

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
        <View style={styles.content}>
          <View style={styles.progress}>
            <View style={styles.progressOuterText}>
              <CurvedText
                width={210}
                height={210}
                rotate={52}
                text="75% of daily goal"
                fill="#333333FF"
                fontSize={13}
                fontWeight={800}
              />
            </View>
            <CircularProgress
              value={20}
              progressValueColor="#333333FF"
              progressValueStyle={{ fontWeight: '800', fontSize: 32 }}
              title="kcal left"
              titleColor="#333333FF"
              titleStyle={{ fontWeight: '500' }}
              inActiveStrokeColor={'#43b96d'}
              inActiveStrokeOpacity={0.2}
            />
          </View>
          <View style={styles.details}>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Protein</ThemedText>
              <ThemedText style={styles.detailsValue}>80g / 120g</ThemedText>
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Carbs</ThemedText>
              <ThemedText style={styles.detailsValue}>200g / 250g</ThemedText>
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Carbs</ThemedText>
              <LinearProgress progress={30} color="#43b96d" />
            </View>
            <View style={styles.detailsRow}>
              <ThemedText style={styles.detailsTitle}>Fat</ThemedText>
              <LinearProgress progress={30} color="#43b96d" />
            </View>
            <View style={[styles.detailsRow, { justifyContent: 'center' }]}>
              <ThemedText style={styles.detailsValue}>50g / 70g</ThemedText>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcefc4',
    paddingHorizontal: 16,
    paddingVertical: 32,
    flexShrink: 0,
    height: '35%',
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
    // fontFamily: 'Roboto',
  },
  logo: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  progress: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  progressOuterText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  detailsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  detailsTitle: {
    color: '#151515',
    fontWeight: 'bold'
  },
  detailsValue: {
    color: '#3e3e3e'
  }
})