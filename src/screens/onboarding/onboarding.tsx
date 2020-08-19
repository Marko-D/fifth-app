  
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from '../../components/carousel';

const images = [
	{
    id: "1",
    title: "Slide 1",
		imageUrl: "https://source.unsplash.com/random",
	},
	{
    id: "2",
    title: "Slide 2",
		imageUrl: "https://source.unsplash.com/random",
	},
];

export default function Onboarding () {
  return (
    <View style={styles.container}>
      {/* <Text>Statistics Carousel:</Text>
      <Carousel
        style='stats'
        itemsPerInterval={3}
        items={[{
          label: 'TODAY',
          value: 1,
        }, {
          label: 'THIS WEEK',
          value: 39,
        }, {
          label: 'THIS MONTH',
          value: 120,
        }, {
          label: 'YESTERDAY',
          value: 3,
        }, {
          label: 'LAST WEEK',
          value: 25,
        }, {
          label: 'LAST MONTH',
          value: 175,
        }]}
      />

      <Text style={{ marginTop: 30, }}>
        Intro Slides Carousel:
      </Text> */}
      <Carousel
        style='slide'
        items={images}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});