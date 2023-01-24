import { View, Text } from 'react-native'
import React from 'react'
import { Placeholder, PlaceholderMedia,Shine,PlaceholderLine } from 'rn-placeholder'

const LoadingPlaceholder = () => {
  return (
    <Placeholder
      className='bg-white p-1 items-center my-3'
      Animation={Shine}
      Left={props => (
        <PlaceholderMedia  style={{
          width:100,
          height:100,
          margin:10,
        }} />
      )}
      style={{
        height:200,
      }}
    >
      <PlaceholderLine width={70} />
      <PlaceholderLine width={90} />
      <PlaceholderLine width={50} />
    </Placeholder>
  )
}

export default LoadingPlaceholder