import { View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Content = (props) => {
  return (
    <>
    <Card.Content className='flex-col items-center'>
        <View className='flex-row justify-center items-center flex flex-wrap p-1 pt-0'>
            <Text className='font-semibold text-lg'>{props.product.title}</Text>
            <Text className='font-normal text-base mx-1'>by</Text>
            <Text className='font-semibold text-lg'>{props.product.brand}</Text>
        </View>
        <View className='flex-row justify-center items-center p-1'>
            <Text variant="titleLarge" className='mr-10 font-semibold'>{props.product.price}$</Text>
            <Ionicons  name='star' size={15} color={'#872dd6'} />
            <Text className='mx-1 font-semibold' variant="bodyLarge" >
              {props.product.rating}/5
            </Text>
        </View>
        <Text className='p-1 text-base' variant='bodyMedium'>{props.product.description}</Text>   
        </Card.Content>     
        <Card.Actions className='mx-auto flex-wrap justify-center mb-3 p-1'>
          <Button className='justify-center' icon={'plus'} mode={'contained'} >Add To Cart</Button>
        </Card.Actions>
    </>
  )
}

export default Content