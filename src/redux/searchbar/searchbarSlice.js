import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../services/API';

const FETCH_CITY = 'weather-dashboard/searchbar/FETCH_CITY';

export const getCity = createAsyncThunk(FETCH_CITY, API.getLongitudeAndLatitude);

const searchbarSlice = createSlice({
  name: 'searchbar',
  initialState: {
    isLoading: false,
    city: {
      coord: {
        lon: -0.13,
        lat: 51.51,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      base: 'stations',
      main: {
        temp: 51.89,
        feels_like: 51.01,
        temp_min: 49.77,
        temp_max: 53.53,
        pressure: 1012,
        humidity: 90,
      },
      visibility: 10000,
      wind: {
        speed: 6.91,
        deg: 220,
      },
      clouds: {
        all: 75,
      },
      dt: 1673026862,
      sys: {
        type: 2,
        id: 2075535,
        country: 'GB',
        sunrise: 1672992304,
        sunset: 1673021214,
      },
      timezone: 0,
      id: 2643743,
      name: 'London',
      img_url: 'https://source.unsplash.com/random/1920%C3%971080/?london',
      cod: 200,
      forecast: {
        cod: '200',
        message: 0,
        cnt: 40,
        list: [
          {
            dt: 1673038800,
            main: {
              temp: 53.06,
              feels_like: 52.25,
              temp_min: 53.06,
              temp_max: 53.22,
              pressure: 1011,
              sea_level: 1011,
              grnd_level: 1009,
              humidity: 89,
              temp_kf: -0.09,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 83,
            },
            wind: {
              speed: 14.83,
              deg: 202,
              gust: 31.5,
            },
            visibility: 10000,
            pop: 0.26,
            rain: {
              '3h': 0.15,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2023-01-06 21:00:00',
          },
          {
            dt: 1673049600,
            main: {
              temp: 52.7,
              feels_like: 51.8,
              temp_min: 52.57,
              temp_max: 52.7,
              pressure: 1010,
              sea_level: 1010,
              grnd_level: 1007,
              humidity: 88,
              temp_kf: 0.07,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 92,
            },
            wind: {
              speed: 15.99,
              deg: 199,
              gust: 33.49,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2023-01-07 00:00:00',
          },
          {
            dt: 1673060400,
            main: {
              temp: 53.11,
              feels_like: 51.8,
              temp_min: 53.11,
              temp_max: 53.11,
              pressure: 1007,
              sea_level: 1007,
              grnd_level: 1004,
              humidity: 78,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 18.39,
              deg: 200,
              gust: 37.98,
            },
            visibility: 10000,
            pop: 0,
            sys: {
              pod: 'n',
            },
            dt_txt: '2023-01-07 03:00:00',
          },
          {
            dt: 1673071200,
            main: {
              temp: 51.57,
              feels_like: 50.23,
              temp_min: 51.57,
              temp_max: 51.57,
              pressure: 1004,
              sea_level: 1004,
              grnd_level: 1001,
              humidity: 81,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 18.1,
              deg: 184,
              gust: 39.39,
            },
            visibility: 10000,
            pop: 0.02,
            sys: {
              pod: 'n',
            },
            dt_txt: '2023-01-07 06:00:00',
          },
          {
            dt: 1673082000,
            main: {
              temp: 50.25,
              feels_like: 48.88,
              temp_min: 50.25,
              temp_max: 50.25,
              pressure: 1001,
              sea_level: 1001,
              grnd_level: 998,
              humidity: 83,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 19.6,
              deg: 180,
              gust: 40.04,
            },
            visibility: 10000,
            pop: 0.78,
            rain: {
              '3h': 0.98,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2023-01-07 09:00:00',
          },
          {
            dt: 1673092800,
            main: {
              temp: 50.95,
              feels_like: 49.75,
              temp_min: 50.95,
              temp_max: 50.95,
              pressure: 999,
              sea_level: 999,
              grnd_level: 996,
              humidity: 85,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 20.33,
              deg: 197,
              gust: 41.09,
            },
            visibility: 10000,
            pop: 1,
            rain: {
              '3h': 2.29,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2023-01-07 12:00:00',
          },
          {
            dt: 1673103600,
            main: {
              temp: 51.58,
              feels_like: 50.16,
              temp_min: 51.58,
              temp_max: 51.58,
              pressure: 997,
              sea_level: 997,
              grnd_level: 995,
              humidity: 79,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 15.99,
              deg: 210,
              gust: 34.2,
            },
            visibility: 10000,
            pop: 0.85,
            rain: {
              '3h': 1.26,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2023-01-07 15:00:00',
          },
        ],
        city: {
          id: 2643743,
          name: 'London',
          coord: {
            lat: 51.5073,
            lon: -0.1276,
          },
          country: 'GB',
          population: 1000000,
          timezone: 0,
          sunrise: 1672992302,
          sunset: 1673021214,
        },
      },
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCity.pending, (state) => ({
      ...state,
      isLoading: true,
      error: '',
    }));

    builder.addCase(getCity.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      city: action.payload,
    }));

    builder.addCase(getCity.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error,
    }));
  },
});

export default searchbarSlice.reducer;
