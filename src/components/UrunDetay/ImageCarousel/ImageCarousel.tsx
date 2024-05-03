import {FlatList, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = React.useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flat}
        data={images}
        renderItem={item => (
          <Image style={styles.image} source={{uri: item.item}} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={styles.image.width * 0.5}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}></FlatList>
      <View style={styles.dot_container}>
        {images.map((images, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: activeIndex == index ? '#5D3EBD' : '#F2F0FD'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
