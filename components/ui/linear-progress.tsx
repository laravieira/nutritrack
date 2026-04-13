import React from 'react';
import { View, StyleSheet } from 'react-native';

type LinearProgressProps = {
  progress: number;
  color: string;
}

const LinearProgress = ({ progress, color }: LinearProgressProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.track, { backgroundColor: color + '33' }]}>
        <View
          style={[
            styles.bar,
            { backgroundColor: color, width: `${progress}%` }
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  track: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 5,
  },
});

export default LinearProgress;