import {useState, useEffect} from 'react';
import BackgroundTimer from 'react-native-background-timer';

import {useSelector, useDispatch} from 'react-redux';
import {deActivateSession} from '../redux/actions/userActions';

import useAppState from './useAppState';

const useBackGroundCounter = () => {
  const {isSessionActive} = useSelector(state => state.session);
  const dispatch = useDispatch();

  const currentAppState = useAppState();

  const [secondsLeft, setSecondsLeft] = useState(600);

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
};

export default useBackGroundCounter;
