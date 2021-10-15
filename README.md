# Session-Manager-App

## Problem Statement:
Implement a React Native application with a single screen. The screen should just show if the session is active or not, and have a button to toggle this variable. Assume the session is stored in a persisted reducer (use Redux, Redux-persist) variable called “isSessionActive: false/true”. The app should have the following two behaviors: 

1. Logs out the user when the app is in the background state for more than 10 minutes. 
2. Logs out the user when the app is closed. 


It uses React Native v0.66

# How to run this project

1. Clone this repo 
2. npm install
3. cd ios
4. pod install
5. react-native run-ios / run-android
6. react-native start
