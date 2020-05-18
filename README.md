# reactNativePrac
React Native로 날씨 앱을 빌드하는 프로젝트.

expo로 휴대폰과 연결 성공, react-native의 작동방식 이해.

## `2020/05/17`
React flexbox에 대한 이해.
Loading.js 추가 import방식과 컴포넌트 사용은 기존 리액트와 
비슷한 방식 expo-location api를 import후 사용.
alert 사용 및 expo location 의 사용 및 loading.js 코드 추가

## `2020/05/19`

axios를 이용해 openweatherapi에서 정보를 가져와 온도를 가져오는데 성공

weather.js 날씨에 따른 아이콘 및 text ,linearGradient 설정
const {data: {
            main:{temp},
            weather
          }
        } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
        isLoading : false,
        condition: weather[0].main,
        temp});
  };
  
  es6를 사용한 코드 정리 json 정보로 온도 날씨정보 가져옴.
  1차 프로젝트 종료.
  
  
  ++ 2차 프로젝트 지역 정보 및 기타 정보 더 가져오기.
  