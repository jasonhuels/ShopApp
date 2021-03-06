import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreeen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList 
      data={products} 
      keyExtractor={item => item.id} 
      renderItem={itemData => 
        <ProductItem 
          image={itemData.item.imageUrl} 
          title={itemData.item.title} 
          price={itemData.item.price} 
          onViewDetail={() => { props.navigation.navigate("ProductDetail", { 
            productId: itemData.item.id,
            productTitle: itemData.item.title 
          })}}
          onAddToCart={() => { }}
        />}
    />
  );
};

ProductsOverviewScreeen.navigationOptions = {
  headerTitle: "All Products"
};

const styles = StyleSheet.create({

});

export default ProductsOverviewScreeen;