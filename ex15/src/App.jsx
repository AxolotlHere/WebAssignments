import React from "react";
import { useContext } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import StyledButtonInline from "./StyledButton1";
import StyledButtonInternal from "./StyledButton2";
import StyledButtonExternal from "./StyledButton3";
import LifecycleDemo from "./LifeCycle";
import { useState } from "react";
import Parent from "./Parent";
import CounterUseState from "./Counter";
import CounterUseReducer from "./Counter1";
import JokeFetcher from "./Joke";
import FocusInput from "./Focus";
import { ThemeProvider } from "./Theme";
import ThemeSwitcher from "./ThemeSwitch";
import FormWithState from "./StateForm";
import FormWithRef from "./RefForm";


const App = () => {
  const [showDemo, setShowDemo] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider>
     <div style={{ backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
      <Header title="Hello, I'm Naveen" />
      <Content />
      <StyledButtonInline />
      <StyledButtonInternal />
      <StyledButtonExternal />
      <ThemeSwitcher/>
      <button onClick={() => setShowDemo(!showDemo)}>
        {showDemo ? "Hide" : "Show"} Lifecycle Demo
      </button>
      <Parent />
      <CounterUseState />
      <CounterUseReducer />
      <JokeFetcher/>
      <FormWithState/>
      <FormWithRef/>
      <FocusInput/>
      {showDemo && <LifecycleDemo />}

      <Footer />

    </div>
    </ThemeProvider>
  );
};

export default App;
