// import { ActivityIndicator } from 'react-native';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native'

// export default Loader() => {
//   return (
//     <>
//     <View style={styles.loading}>
//       <ActivityIndicatoricator color="#bc2b78" size="large" />
//     </View>
//     </>
//   );
// }

import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="#bc2b78" size="large" />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
	loading: {
		position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1000
	},
})
