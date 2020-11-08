import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Detail = () => (
  <View style={styles.container}>
    <Image source={movie.image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <View style={styles.buttonRow}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('PlayMovie')}
        style={styles.playButton}
      >
        <Text style={styles.editProfilesText}>Play</Text>
      </TouchableOpacity>
      <Text style={styles.details}>2015 • 2h 18m • Science Fiction, Action-Adventure</Text>
      <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  image: {},
  title: {},
  playButton: {},
  details: {},
  description:{}
});

export default Detail;
