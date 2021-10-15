import React from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

const LandingScreen = () => {
  const {isSessionActive} = useSelector(state => state.session);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Session manager</Text>
          <Text style={styles.heading}>
            {` Is session active? : ${isSessionActive}`}
          </Text>
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
    fontSize: 18,
    fontWeight: '600',
    marginTop: 200,
  },
});

export default LandingScreen;
