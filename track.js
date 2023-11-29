import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import loc from "./location";

export default function Tracking() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 12.01226,
          longitude: 79.857437,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {loc.map((locating) => {
          return (
            <Marker
              coordinate={locating}
              title={locating.title}
              identifier={locating.title}
              key={locating.id}
            />
          );
        })}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
