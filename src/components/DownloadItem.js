import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Detail = () => {
  const getDetails = (movie) => {
    return '211 MB - 2h 11m';
  };

  const removeMovie = (movie) => {
    console.log('Remove Movie');
  };

  const playMovie = (movie) => {
    navigation.navigate('PlayMovie');
  };

  return (
    <View style={styles.itemContent}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => playMovie(movie)}
        style={styles.containerImage}
      >
        <Image source={movie.image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.itemTitleContent}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subtitle}>{getDetails(movie)}</Text>
      </View>
      <BsFillTrashFill />
    </View>
  );
};

const styles = StyleSheet.create({

    itemContent: {

    },
    image:{
  
    },
    itemTitleContent: {
  
    },
    title: {
  
    },
    subtitle: {
  
    },

});

export default Detail;
