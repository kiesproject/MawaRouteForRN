import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class ListScreen extends React.Component {
  render() {
    const { restaurant, refresh, pullToRefresh } = this.props.screenProps;
    return (
      <FlatList
        data={restaurant.toArray()}
        extraData={restaurant.toArray()}
        keyExtractor={(item, index) => String(index)}
        onRefresh={() => pullToRefresh()}
        refreshing={refresh}
        renderItem={({ item }) => (
          <ListItem
            item={item}
          />
        )}
      />
    );
  }
}

export default ListScreen;
