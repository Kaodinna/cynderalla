import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./carouselCardItem";
import { data } from "./carouselCardItem";

const CarouselCards = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View className="flex flex-col justify-center items-center  mt-4">
      <Carousel
        layout="tinder"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        vertical={false}
        autoplay={true}
      />
      <Pagination
        // containerStyle={{ paddingVertical: 15 }}
        dotsLength={data.length}
        activeDotIndex={index}
        // carouselRef={isCarousel.current}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "#FF6EC7",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
