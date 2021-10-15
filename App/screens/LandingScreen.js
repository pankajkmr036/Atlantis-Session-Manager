import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {deActivateSession} from '../redux/actions/userActions';

import SessionToggleButton from '../components/SessionToggleButton';
import useBackGroundCounter from '../hooks/useBackGroundCounter';

const LandingScreen = () => {
  const {isSessionActive} = useSelector(state => state.session);
  const dispatch = useDispatch();

  useBackGroundCounter();

  useEffect(() => {
    dispatch(deActivateSession());
  }, [dispatch]);

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
