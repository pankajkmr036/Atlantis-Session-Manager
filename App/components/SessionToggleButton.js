import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {activateSession, deActivateSession} from '../redux/actions/userActions';

const SessionToggleButton = () => {
  const {isSessionActive} = useSelector(state => state.session);
  const dispatch = useDispatch();

  const onPressToggleButton = () => {
    if (isSessionActive) {
      return dispatch(deActivateSession());
    }
    return dispatch(activateSession());
  };

  return (
    <View style={styles.toggleButton}>
      <Button title="Toggle session" onPress={onPressToggleButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    marginTop: 50,
  },
});

export default SessionToggleButton;
