import { StyleSheet, View } from 'react-native'
import { ThemedText } from '@/components/themed-text';

export default function TabSettingsScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">SETTINGS</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    gap: 16,
  },
});