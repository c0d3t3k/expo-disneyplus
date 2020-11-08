import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const PlayMovie = (movie) => {
    const close = () => {
        navigation.navigate('Details')
    }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>close }
        style={styles.closeButton}
      >
        <AiOutlineCloseCircle />
      </TouchableOpacity>
      <Image source={movie.image} style={styles.movieImage} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      height: '100%'
    },
    // Top Right
    closeButton: {
        position: 'absolute',
        margin: 5,
    },
    // Full Screen
    movieImage: {
        width: '100%'
    },
});

export default PlayMovie;
