import './scss/main.scss';

const onGetPositionSuccess = (location) => {
  console.log(location);
  console.log(location.coords);
};

const onGetPositionError = (error) => {
  console.log(error);
  console.log(error.code);
  console.log(error.message);
};

// needed for mobile geolocation mostly
// maximumAge - время кэширования координат(как часто запрашивать новую позицию), в мс
// timeout - количество мс, которое API геолокации будет пытаться получить координаты
// enableHighAccuracy - повышенная точность (true/false)

// navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
//   options
// );
const getCurrentPosition = () => {
  const options = {
    maximumAge: 30000,
    timeout: 5000,
    enableHighAccuracy: false
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
getCurrentPosition().then(onGetPositionSuccess).catch(onGetPositionError);
