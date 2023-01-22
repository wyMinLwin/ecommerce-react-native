// import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardItem = (props) => {
  const LeftContent = () => <Image className='w-12 h-12 rounded-full'
    source={{
    uri: String(props.product.thumbnail)
    }} 
    />
    const navigation = useNavigation();

  return (
    <Card className='m-2'>
      <Card.Cover source={{ uri: String(props.product.thumbnail) }} />
      <Card.Title title={props.product.title} subtitle={props.product.category} left={LeftContent} />
      <Card.Content className='flex-row items-center'>
        <Text variant="titleMedium" className='mr-10'>{props.product.price}$</Text>
        <Ionicons  name='star' size={16} color={'#872dd6'} />
        <Text className='mx-1' variant="bodyMedium" >
          {props.product.rating}/5
        </Text>
      </Card.Content>
      <Card.Actions className='mx-auto justify-center'>
        <Button className='justify-center' icon={'eye'} mode={'outlined'}
          onPress={() => {
            navigation.push('DetailStack',
            {title:props.product.title,id:props.product.id,category:props.product.category}
            )    
          }}
        >Watch Detail</Button>
        <Button className='justify-center' icon={'plus'} mode={'contained'} >Add To Cart</Button>
      </Card.Actions>
    </Card>
  )
}

export default CardItem