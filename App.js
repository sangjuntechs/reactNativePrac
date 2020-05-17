import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';

export default class extends React.Component{
  state = {
    isLoading :true
  };
  getLoaction = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading : false});
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다", "옵션에서 위치 찾기를 활성화 시키세요.");
    }
    
  };
  componentDidMount() {
    this.getLoaction();
  }
  render() {
    const { isLoading} = this.state;
    return isLoading ? <Loading/> : null;
  }
}


