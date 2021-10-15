import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {toggleSession} from '../redux/actions/userActions';

const LandingScreen = () => {
  const {isSessionActive} = useSelector(state => state.session);

  const dispatch = useDispatch();

  const onPressToggleButton = () => dispatch(toggleSession());

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Session manager</Text>
        </View>

        <Text style={styles.heading}>
          {` Is session active? : ${isSessionActive}`}
        </Text>

        <View style={styles.toggleButton}>
          <Button title="Toggle session" onPress={onPressToggleButton} />
        </View>
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
