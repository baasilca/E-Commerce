import React, { useState, useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'
import { Divider, List, Card, IconButton, Avatar, Button } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from 'react-native-animatable';
import dummyDB from '../../../DummyDatas';
import { Context } from '../../store';
import AppStyles from '../../AppStyles';

export default function index(props) {

  const [state, dispatch] = useContext(Context);
  const [selectedCategoryResponse, setSelectedCategoryResponse] = useState(1);
  const [selectedProductResponse, setSelectedProductResponse] = useState(null);
  const [listProducts, setListProducts] = useState(dummyDB.rice);
  const [orderTotal, setOrderTotal] = useState(null);

  useEffect(() => {
    setOrderTotal(state.cart.reduce((acc, curr) => acc + (curr.price_for_calculations * curr.qty), 0))
  }, [state])

  const add_to_cart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  }

  const remove_from_cart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  }

  const change_cart_qty = (item, count) => {
    dispatch({ type: 'CHANGE_CART_QTY', payload: { id: item.id, qty: count } });
  }

  const renderOfferCards = ({ item, index }) => (
    <List.Item
      style={{ padding: 20, }}
      title={item.title}
      titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
      description={item.description}
      descriptionStyle={{ color: "#000" }}
      left={(props) => (
        <Image
          source={item.icon}
          style={{ width: 30, height: 30, resizeMode: "contain", tintColor: AppStyles.primary }}
        />
      )}
    />
  )
  const renderProducts = ({ item, index }) => {
    const getItemFromCart = state.cart.find(obj => obj.id === item.id)
    return (
      <Card
        style={{
          backgroundColor: "#fff",
          margin: 5,
          padding: 5,
          borderColor:
            item.id === selectedProductResponse ? AppStyles.primary : "#fff",
          borderWidth: 1,
        }}
        onPress={() => { setSelectedProductResponse(item.id) }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{}}>
            <Image
              source={item.image}
              style={{ width: 100, height: 100, resizeMode: "contain", borderRadius: 10, }}
            />
          </View>
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 16 }}>{item.item_name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.sale_price}</Text>
              {item.offer ?
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', left: 10, opacity: 0.3, textDecorationLine: 'line-through' }}>{item.original_price}</Text>
                  <View style={{ alignSelf: 'center', left: 15, backgroundColor: "#ffc65c", padding: 2, borderRadius: 5 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: "#fff" }}>{item.offer_tag}</Text>
                  </View>
                </View>
                :
                <View />
              }
            </View>
            <View style={{ backgroundColor: "#f0f0f0", flexDirection: "row", minWidth: "65%", top: 5, borderRadius: 5 }}>
              <View style={{ flex: 1 }}>
                <IconButton
                  icon="minus"
                  iconColor={AppStyles.primary}
                  backgroundColor="#fff"
                  size={20}
                  style={{ width: 30, height: 30, borderRadius: 5, flex: 1 }}
                  onPress={() => {
                    setSelectedProductResponse(item.id)
                    state.cart.some(product => product.id === item.id) ?
                      change_cart_qty(getItemFromCart, getItemFromCart.qty - 1)
                      :
                      remove_from_cart(item)
                  }}
                />
              </View>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: "#fff", flex: 1, alignSelf: "center", color: "#bababa" }}> {getItemFromCart ? getItemFromCart.qty : "0"} Nos</Text>
              <View style={{ flex: 0 }}>
                <IconButton
                  icon="plus"
                  iconColor={AppStyles.primary}
                  backgroundColor="#fff"
                  size={20}
                  style={{ width: 30, height: 30, borderRadius: 5 }}
                  onPress={() => {
                    setSelectedProductResponse(item.id)
                    state.cart.some(product => product.id === item.id) ?
                      change_cart_qty(getItemFromCart, getItemFromCart.qty + 1)
                      :
                      add_to_cart(item)
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Card>
    )
  }
  return (
    <View style={styles.container}>

      {/* <View style={styles.headerContainer}> */}
      <List.Item
        style={{ padding: 5 }}
        title={<View><Text style={{ fontSize: 18, fontWeight: 'bold' }}>Work <Ionicons name={"chevron-down-outline"} size={25} style={{ alignSelf: 'center', marginLeft: 10 }} /></Text></View>}
        titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
        description={"P.O. Box 3625. Sheikh Khalifa Bin Saeed Street Dubai. P.O. Box 901"}
        descriptionStyle={{ color: "#bababa", width: "80%" }}
        right={(props) => (
          <Avatar.Image size={35} source={require('../../../assets/ThemeImages/user.png')} />
        )}
        left={(props) => (
          <List.Icon
            {...props}
            icon="map-marker-outline"
            color={AppStyles.primary}
          />
        )}
      />
      <Divider />
      {/* </View> */}

      <List.Item
        style={{ padding: 30 }}
        title={"Store 1"}
        titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        descriptionStyle={{ color: "#bababa" }}
        left={(props) => (
          <Image
            source={require("../../../assets/ThemeImages/logo_mint.png")}
            style={styles.mintLogo}
          />
        )}
      />

      <View style={{ alignItems: "center" }}>
        <FlatList
          data={dummyDB.offers}
          renderItem={renderOfferCards}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        {
          dummyDB.categories.map((item, index) => {
            return (
              <Card
                style={{
                  backgroundColor: "#fff",
                  padding: 5, margin: 5,
                  borderColor:
                    item.id === selectedCategoryResponse ? AppStyles.primary : "#fff",
                  borderWidth: 1,
                }}
                onPress={() => {

                  setListProducts(
                    item.id === 1 ?
                      dummyDB.rice :
                      item.id === 2 ?
                        dummyDB.tea :
                        item.id === 3 ?
                          dummyDB.drinks :
                          item.id === 4 ?
                            dummyDB.others : dummyDB.rice
                  )

                  setSelectedCategoryResponse(item.id)

                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 70, height: 70, resizeMode: "contain", borderRadius: 10 }}
                />
                <Text style={{ alignSelf: 'center', margin: 5 }}>{item.title}</Text>
              </Card>
            )
          })
        }
      </View>
      <FlatList
        data={listProducts}
        renderItem={renderProducts}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingBottom: 70, margin: 5 }}
        ListFooterComponent={() => {
          return (
            <Text style={{ alignSelf: 'center', opacity: 0.4 }}>No more data</Text>
          )
        }}
      />

      {state.cart.length ?
        <Animatable.View
          animation='zoomIn'
          duration={1500}>
          <View style={[styles.triangle]} />
          <View style={styles.Box}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ color: "#fff", fontSize: 17 }}>{state.cart.length} Items</Text>
                <Text style={{ color: "#fff", fontSize: 17 }}>₹{orderTotal}</Text>
              </View>
              <TouchableOpacity onPress={() => { props.navigation.navigate("Cart") }} style={{ alignSelf: 'flex-end', backgroundColor: "#fff", borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                  <Text style={{ color: "#000", fontSize: 17, left: 10 }}>Checkout</Text>
                  <IconButton
                    icon="cart-outline"
                    iconColor={AppStyles.primary}
                    size={25}
                    style={{ width: 60, height: 30, borderRadius: 30 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
        :
        <View style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Cart")
            }}
          >
            <Animatable.View
              animation='fadeInLeft'
              duration={1500}>
              <IconButton
                icon="cart-outline"
                iconColor={"white"}
                backgroundColor={AppStyles.primary}
                size={25}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
            </Animatable.View>
          </TouchableOpacity>
        </View>
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerContainer: {
    height: "15%",
    padding: 20,
    justifyContent: "center"
  },
  mintLogo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 10
  },
  Box: {
    position: "absolute",
    bottom: 10,
    // right: 10,
    // marginTop: 30,
    // flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: AppStyles.primary
  },
  triangle: {
    bottom: 10,
    position: "absolute",
    backgroundColor: "transparent",
    borderStyle: "solid",
    height: 20,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 85,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: AppStyles.primary,
    alignSelf: "center"
  },
});
