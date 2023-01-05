import React from "react";

// Setting up Webpack
// To import CSS files in a React application, you need to configure the Style and CSS loaders first.
// Install both loaders:
// npm i css-loader style-loader --save-dev
// Or, if you love Yarn:
// yarn add --dev css-loader style-loader
// Add this entry to the module.rules array, in your webpack.config.js file:
// {
//   test: /\.css$/,
//   use: [
//     'style-loader',
//     'css-loader'
//   ]
// }
// That’s all. Now you can run your application.

import MainStyle from './mainStyle.module.css';

const TestStyle = props => {
  
  const divStyle = {
    margin: "40px",
    border: "5px solid pink"
  };
  const pStyle = {
    fontSize: "15px",
    textAlign: "center"
  };

  return (
    <React.Fragment>
      <div style={divStyle}>
        <p style={pStyle}>Get started with inline style</p>
        <p style={{ color: "green", backgroundColor: "yellow" }}>
          another in line style
        </p>
      </div>

      <div className={MainStyle.divTest}>Get style</div>
      <p className={MainStyle.pTest}>Get style</p>
    </React.Fragment>
  );
};

export default TestStyle;
