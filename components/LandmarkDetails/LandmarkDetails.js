/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const LandmarkDetails = ({showLandmarksData, setShowLandmarksData}) => {
  const {name, images, city, country, description} = showLandmarksData;

  return (
    <View width="100%" style={styles.detailsContainer}>
      <Image
        style={styles.image}
        source={{
          uri: images[0].url,
        }}
      />
      <View style={styles.details}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.tinyLogo}
              source={require('./../../asset/report.png')}
            />
            <Image
              style={styles.tinyLogo}
              source={require('./../../asset/report.png')}
            />
            <Image
              style={styles.tinyLogo}
              source={require('./../../asset/report.png')}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <Image
            style={styles.tinyLogo}
            source={require('./../../asset/place.png')}
          />
          <Text>
            {city}, {country}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>{description}</Text>
        </View>
      </View>
      <Text
        onPress={() => setShowLandmarksData({})}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: 'red',
          paddingLeft: 8,
          paddingRight: 8,
          borderRadius: 20,
          color: '#FFF',
          fontSize: 20,
        }}>
        X
      </Text>
    </View>
  );
};

export default LandmarkDetails;
var width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#FFF',
    width: width - 25,
  },
  image: {
    flex: 4,
  },
  details: {
    flex: 6,
    marginLeft: 5,
  },
  tinyLogo: {
    height: 15,
    width: 15,
    marginTop: 4,
    marginRight: 5,
  },
});
