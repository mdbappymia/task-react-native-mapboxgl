/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import customData from './landmarks.json';
import LandmarkDetails from './components/LandmarkDetails/LandmarkDetails';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaProvider} from 'react-native-safe-area-context';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoibWRiYXBweW1pYSIsImEiOiJja3hld2MyYnMwMDRtMnhtbGlrYzZraDdmIn0.TkDRKUVl54nNYzwT98ZoqQ',
);

const App = () => {
  const [showLandmarksData, setShowLandmarksData] = useState({});
  const [selectedValue, setSelectedValue] = useState('java');
  const [landmarksData, setLandmarkData] = useState(
    customData.data.allLandmarks,
  );
  const handleSelect = name => {
    setShowLandmarksData({});
    if (name === 'All') {
      setLandmarkData(customData.data.allLandmarks);
      setSelectedValue(name);
      return;
    }
    const selectedLandmark = customData.data.allLandmarks.filter(
      item => item.name === name,
    );
    setLandmarkData(selectedLandmark);
    setSelectedValue(name);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}>
            {landmarksData.map((singleLandmarksData, index) => (
              <View key={index}>
                <MapboxGL.Camera
                  zoomLevel={10}
                  centerCoordinate={[
                    singleLandmarksData.location.longitude,
                    singleLandmarksData.location.latitude,
                  ]}
                />
                <MapboxGL.PointAnnotation
                  onSelected={() => setShowLandmarksData(singleLandmarksData)}
                  key={index}
                  id={index.toString()}
                  coordinate={[
                    singleLandmarksData.location.longitude,
                    singleLandmarksData.location.latitude,
                  ]}
                />
              </View>
            ))}
          </MapboxGL.MapView>
        </View>
        {showLandmarksData.name && (
          <View style={styles.landmarkDetails}>
            <LandmarkDetails
              showLandmarksData={showLandmarksData}
              setShowLandmarksData={setShowLandmarksData}
            />
          </View>
        )}
        <View
          width="70%"
          style={{
            position: 'absolute',
            top: 30,
            flexDirection: 'row',
          }}>
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 50,
              width: 250,
              backgroundColor: '#fff',
            }}
            onValueChange={(itemValue, itemIndex) => handleSelect(itemValue)}>
            <Picker.Item label="All" value="All" />
            {customData.data.allLandmarks.map(data => (
              <Picker.Item
                key={data.name}
                label={data.name}
                value={data.name}
              />
            ))}
          </Picker>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
  landmarkDetails: {
    position: 'absolute',
    bottom: 20,
  },
});

export default App;
