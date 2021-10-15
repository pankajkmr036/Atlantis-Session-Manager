import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

import BackgroundTimer from 'react-native-background-timer';

import {useSelector, useDispatch} from 'react-redux';
import {deActivateSession} from '../redux/actions/userActions';

import SessionToggleButton from '../components/SessionToggleButton';

import useAppState from '../hooks/useAppState';

const LandingScreen = () => {
  const {isSessionActive} = useSelector(state => state.session);
  const dispatch = useDispatch();

  const currentAppState = useAppState();

  const [secondsLeft, setSecondsLeft] = useState(600);

  useEffect(() => {
    dispatch(deActivateSession());
  }, []);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) {
          return secs - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    if (!isSessionActive) {
      return;
    }

    if (currentAppState.match(/inactive|background/)) {
      startTimer();
    } else {
      BackgroundTimer.stopBackgroundTimer();
      setSecondsLeft(600);
    }

    return () => {
      BackgroundTimer.stopBackgroundTimer();
      setSecondsLeft(600);
    };
  }, [isSessionActive, currentAppState]);

  useEffect(() => {
    if (secondsLeft === 0) {
      dispatch(deActivateSession());
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [dispatch, secondsLeft]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Session manager</Text>
        </View>

        <Text style={styles.heading}>
          {` Is session active? : ${isSessionActive}`}
        </Text>
        <SessionToggleButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    alignSelf: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  heading: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 200,
  },
  toggleButton: {
    marginTop: 50,
  },
});

export default LandingScreen;
