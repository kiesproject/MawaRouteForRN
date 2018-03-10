import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 8,
  },
  title: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    elevation: 2,
  },
  cardTitleStyle: {
    position: 'absolute',
    top: 120,
    left: 26,
    backgroundColor: 'transparent',
    padding: 16,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  cardImageStyle: {
    height: 170,
    resizeMode: 'cover',
  },
  cardContentStyle: {
    padding: 15,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  cardActionStyle: {
    borderStyle: 'solid',
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    padding: 15,
  },
});

function typeOfObject(param) {
  return typeof param === 'object';
}

class ListItem extends React.Component {
  render() {
    const { item, goDetail } = this.props;
    const { width } = Dimensions.get('window');
    const checkbox = <Icon size={48} name="checkbox-blank-circle-outline" color="white" />;
    return (
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          {/* TODO: decide theme */}
          {
            !typeOfObject(item.image_url.shop_image1) ?
              <View style={{ flex: 'flex-end' }}>
                {checkbox}
                <Image
                  source={{ uri: item.image_url.shop_image1 }}
                  style={[styles.cardImageStyle]}
                />
                <View
                  style={[{ ...StyleSheet.absoluteFillObject, backgroundColor: '#0005', height: 170 }]}
                />
              </View> :
              <View style={[{ height: 170, backgroundColor: '#e4581bff', alignItems: 'flex-end' }]}>
                {checkbox}
              </View>
          }
          <Text
            style={[styles.cardTitleStyle, { maxWidth: width - 16 - 24 }]}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text style={[styles.cardContentStyle]}>{item.address}</Text>
          <TouchableOpacity onPress={() => goDetail(item)}>
            <Text style={styles.cardActionStyle}>詳細画面</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ListItem;
