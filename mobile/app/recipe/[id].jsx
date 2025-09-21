import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Details = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown:false
        }}
      />
      <Text>Details</Text>
    </View>
  )
}

export default Details