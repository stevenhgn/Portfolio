import React from "react";
import "./App.css";
import { hot } from "react-hot-loader/root";
import Home from "./pages/Home/Home";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import themes from "./shared/theme";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.standard,
    };
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <AppWrapper className="App">
          <Home />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

const AppWrapper = styled.div`
  /* height: 100vh; */
`;

export default hot(App);
