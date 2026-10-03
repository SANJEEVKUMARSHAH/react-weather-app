# 🌦️ React Weather App

A simple and interactive **Weather App built with React** that allows users to search for a city and view current weather information using the **OpenWeather API**.

This project was built as part of my **React learning journey** to practice API integration, state management, props, asynchronous JavaScript, and component-based development.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature in Celsius
* 💧 Display humidity
* 🌬️ Display atmospheric pressure
* 🌡️ Display minimum and maximum temperature
* ☁️ Display current weather conditions
* ⚠️ Error handling for invalid city searches
* 🎨 User interface built with Material UI
* ⚛️ Component-based React architecture

## 🛠️ Tech Stack

* **React** – Frontend development
* **Vite** – Development environment and build tool
* **JavaScript** – Application logic
* **Material UI (MUI)** – User interface components
* **OpenWeather API** – Weather data

## 📂 Project Structure

```text
react-weather-app/
│
├── public/
│
├── src/
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── WeatherApp.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

## ⚙️ How It Works

The application follows a simple data flow:

```text
User enters city
       ↓
   SearchBox
       ↓
OpenWeather API
       ↓
Weather data received
       ↓
WeatherApp updates state
       ↓
    InfoBox
       ↓
Weather information displayed
```

## 🧠 React Concepts Practiced

### useState

Used to manage city input, error state, and weather information.

```jsx
const [weatherinfo, setweatherinfo] = useState(initialData);
```

### Props

Functions and weather information are passed between components using props.

```jsx
<SearchBox updateinfo={updateinfo} />
<InfoBox info={weatherinfo} />
```

### API Integration

Weather information is retrieved from the OpenWeather API.

```js
const response = await fetch(
  `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
);
```

### Async/Await

Used to handle asynchronous API requests.

```js
const json_response = await response.json();
```

### Error Handling

The application handles unsuccessful API requests and displays an error message when a city cannot be found.

## 📚 What I Learned

Building this project helped me practice:

* React component structure
* State management with `useState`
* Passing data using props
* Fetching data from a REST API
* Async/Await
* Handling API errors
* Working with JSON responses
* Using Material UI components
* Organizing a React application
* Connecting a frontend application with an external API

## 🔮 Future Improvements

* Add a loading state
* Add dynamic weather-based images
* Improve responsive design
* Add weather forecast information
* Add city search suggestions
* Add more detailed weather information
* Improve error messages
* Deploy the application

## 🎯 Project Status

**Completed — Learning Project**

This project is part of my ongoing journey of learning React and building practical web development projects.

## 👨‍💻 Author

**Sanjeev Kumar Shah**

Computer Engineering Student | React & Web Development Learner | AI/ML & IoT Enthusiast

* Portfolio: [sanjeevkumarshah.com.np](https://sanjeevkumarshah.com.np)
* GitHub: [github.com/SANJEEVKUMARSHAH](https://github.com/SANJEEVKUMARSHAH)

## 🙏 Acknowledgements

* [React](https://react.dev/)
* [Vite](https://vite.dev/)
* [Material UI](https://mui.com/)
* [OpenWeather](https://openweathermap.org/)
