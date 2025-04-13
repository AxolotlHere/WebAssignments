
import React, { Component, useState } from "react";

// Task 1: Hello React without JSX
const HelloReactNoJSX = () => {
  return React.createElement("h1", null, "Hello, React!");
};

// Task 1 (ii) with JSX
const HelloReactJSX = () => {
  return <h1>Hello, React!</h1>;
};

// Task 1 (iii) message in a variable
const MessageDisplay = () => {
  const message = "Welcome to React!";
  return <h1>{message}</h1>;
};

// Task 2: List of Fruits
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Mango"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// Task 3: Inline styled message
const StyledMessage = () => {
  const style = {
    color: "blue",
    backgroundColor: "lightyellow",
    padding: "10px",
    borderRadius: "8px",
  };
  return <p style={style}>This is a styled message!</p>;
};

// Task 4: Sum of squares
const SumOfSquares = ({ a, b }) => {
  const result = a * a + b * b;
  return <p>Sum of squares: {result}</p>;
};

// Task 5: Conditional Good Morning/Evening
const Greeting = ({ isMorning }) => {
  return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
};

// Task 6: Day of the week
const DayOfWeek = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return <h3>Today is {days[today]}</h3>;
};

// Task 7: Prime Check
const PrimeChecker = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? "a Prime" : "not a Prime"} number.</p>;
};

// Task 8: Temperature Converter (Class Component)
class TemperatureConverter extends Component {
  state = {
    celsius: "",
    fahrenheit: "",
  };

  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    const fahrenheit = (celsius * 9) / 5 + 32;
    this.setState({ celsius, fahrenheit: fahrenheit.toFixed(2) });
  };

  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    const celsius = ((fahrenheit - 32) * 5) / 9;
    this.setState({ fahrenheit, celsius: celsius.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h3>Temperature Converter</h3>
        <label>
          Celsius:
          <input type="number" value={this.state.celsius} onChange={this.handleCelsiusChange} />
        </label>
        <br />
        <label>
          Fahrenheit:
          <input type="number" value={this.state.fahrenheit} onChange={this.handleFahrenheitChange} />
        </label>
      </div>
    );
  }
}

// Task 9: Reverse String and Palindrome
const StringReverser = ({ input }) => {
  const reversed = input.split("").reverse().join("");
  const isPalindrome = input === reversed;
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? "It is a palindrome!" : "Not a palindrome."}</p>
    </div>
  );
};

// Task 10: Random Number Generator
const RandomNumber = () => {
  const [num, setNum] = useState(null);
  return (
    <div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100) + 1)}>Generate Random Number</button>
      {num !== null && <p>Random Number: {num}</p>}
    </div>
  );
};

// Task 11: Leap Year Checker
const LeapYearChecker = ({ year }) => {
  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return <p>{year} is {isLeap ? "" : "not "}a leap year.</p>;
};

// Task 12: Class component with props
class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h2>Hello, {firstName} {lastName}!</h2>;
  }
}

// Main App
const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <HelloReactNoJSX />
      <HelloReactJSX />
      <MessageDisplay />
      <FruitList />
      <StyledMessage />
      <SumOfSquares a={3} b={4} />
      <Greeting isMorning={true} />
      <DayOfWeek />
      <PrimeChecker number={29} />
      <TemperatureConverter />
      <StringReverser input="madam" />
      <RandomNumber />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="Naveen" lastName="Bharath" />
    </div>
  );
};

export default App;
