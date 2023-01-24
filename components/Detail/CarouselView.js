import Carousel, {Pagination}  from 'react-native-snap-carousel'
import React, { useRef, useState } from 'react'
import { Card } from 'react-native-paper'
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
import { Dimensions } from 'react-native'


const CarouselView = (props) => {
  const [active, setActive] = useState(0)
  const CarouselRef = useRef(null); 
  return (
    <>
    <Carousel
      autoplay={true}
        layout='default'
        ref={CarouselRef}
        data={props.product.images}
        renderItem={({ item, index }) => (
          <Card.Cover key={index} className='mt-3 ' source={{ uri: item }} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onScrollIndexChanged={(active) => setActive(active)}        
      />
      <Pagination 
        dotsLength={props.length} 
        activeDotIndex={active}
        carouselRef={CarouselRef}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </>
  )
}

export default CarouselView