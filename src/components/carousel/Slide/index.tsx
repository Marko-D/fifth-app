import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

export const Slide = ({title, imageUrl}: any) => {



  return (
    <View style={styles.slide}>
      {/* <Text style={{...styles.slideText }}>
        {title}
      </Text> */}

      <Image style={styles.image}  source={{ uri: imageUrl }} />
    </View>
  )
}

export default Slide;