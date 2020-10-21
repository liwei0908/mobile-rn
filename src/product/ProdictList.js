import React, {useState} from 'react';

import {FlatList, View, Text, TouchableOpacity} from 'react-native';import ProductAdd from './ProductAdd';

import styles from '../styles';

/*

const data =[

  {name:"iPhone 7", price:12000},

  {name:"iPhone 8", price:10000},

  {name:"iPhone X", price:20000},

]

*/



export default function ProductList() {

  

  const [selected, setSelected] = useState(null);

  const [products, setProducts] = useState([

    {desc:"iPad", price:20000},

    {desc:"iPhone X", price:30000}

    ]);

  

  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.desc}</Text>

      <Text>{item.price}</Text>

      <Text>/{index}</Text>

    </TouchableOpacity>

    )

  };



  function update(newProduct){

    setProducts(oldProducts=>[...oldProducts, newProduct]);

  }



 return (

   <View style={styles.container}>

   <FlatList 

    data={products} 

    renderItem = {renderItem}

    keyExtractor={item => item.desc}

    >

   </FlatList>

   <ProductAdd update={update}/>

   </View>

 );

}