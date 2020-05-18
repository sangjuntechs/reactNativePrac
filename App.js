import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "b718eb65ee0d88df852232390730f609";

export default class extends React.Component{
  state = {
    isLoading :true
  };

  getWeather = async (latitude,longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&unit_metric`);
    this.setState({isLoading : false, temp: data.main.temp});
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (error) {
      Alert.alert("위치를 찾을 수 없습니다", "옵션에서 위치 찾기를 활성화 시키세요.");
    }
    
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading/> : <Weather temp={temp}/>;
  }
}


