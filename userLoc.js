import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import * as Location from "expo-location";

let location = await Location.getCurrentPositionAsync({
  enableHighAccuracy: true,
});

const [mapRegion, setMapRegion] = useState({
  latitude: location.coords.latitude,
  longitude: location.coords.longitude,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});

/*
const userLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was Denied");
  }
  let location = await Location.getCurrentPositionAsync({
    enableHighAccuracy: true,
  });
  v;
  setMapRegion({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  console.log(location.coords.latitude, location.coords.longitude);
};

useEffect(() => {
  userLocation();
}, []);*/

const userLocationData = [mapRegion.latitude, mapRegion.longitude];

export default userLocationData;
