import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

// You can import supported modules from npm
const DATA =[
  {
    id : 1,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/giacchuyen1.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  {
    id : 2,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/daynguon1.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  {
    id : 3,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/dauchuyendoipsps2-1.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  {
    id : 4,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/dauchuyendoi1.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  {
    id : 5,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/carbusbtops2.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  {
    id : 6,
    title : 'Cáp chuyển từ Cổng USB sang PS2...',
    rating : 4,
    image : require('./assets/daucam1.png'),
    price : '69.000đ',
    discount : '-39%',
  },
  ];

  const App = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./assets/bi_cart-check.png')} style={styles.iconImage}/>
          <View style={styles.searchInput}>
            <Image source={require('./assets/Vector(1).png')} style={styles.iconImage} />
            <Text>Dây cáp usb</Text>
          </View>
          <Image source={require('./assets/bi_cart-check.png')} style={styles.iconImage} resizeMode="contain" />
          <View style={styles.icon3cham}>
            <Image source={require('./assets/Ellipse2.png')} />
            <Image source={require('./assets/Ellipse2.png')} />
            <Image source={require('./assets/Ellipse2.png')} />
          </View>

        </View>
        <FlatList
          data={DATA}
          renderItem ={({item})=>(
            <View style={styles.productCart}>
              <Image style={styles.productImage} source={item.image} />
              <Text>{item.title}</Text>
              <Text style={styles.productRating}>{'★'.repeat(item.rating)} <Text style={{color : '#C4C4C4'}}>★</Text> <Text style={{color:'black'}}>(15)</Text> </Text>
              <View style={styles.productPricediscount}>
                <Text>{item.price}</Text>
                <Text style={{color : '#969DAA'}}>{item.discount}</Text>
              </View>
            </View>


          ) }
          keyExtractor={item=>item.id}
          numColumns = {2}
          contentContainerStyle={styles.productList}
        />
        <View style={styles.footer}>
          <View style={styles.iconNav}>
            <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
          <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
          <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
          </View>
          <Image source={require('./assets/Vector2).png')}/>
        <Image style={{marginRight :15,width : 24,height :24}} source={require('./assets/Vector1.png')}/>
        </View>
      </View>

    );
  };
  

// or any files within the Snack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header :{
    flexDirection :'row',
    justifyContent : 'space-around',
    alignItems :'center',
    backgroundColor : '#1BA9FF',
    width : '100%',
    height : 50,
  },
  searchInput :{
    flexDirection : 'row',
    alignItems : 'center',
    height: 40,
    width : 200,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  iconImage :{
    height :24,
    width : 24,
  },
  icon3cham :{
    flexDirection :'row',
    justifyContent:'center',
    width : 20,
  },
  productList:{
    padding : 10
  },
  productCart :{
    backgroundColor : '#fff',
    borderRadius : 5,
    margin : 5,
    padding : 10,
    
    flex : 1,
  },
  productImage :{
    height : 90,
    width : 120
  },
  productPricediscount :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems:'center'
  },
  productRating :{
    color: '#FFD700',
  },
  footer :{
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    height : 50,
    width : '100%',
    backgroundColor : '#1BA9FF',
  },
  iconNav :{
    flexDirection :'column',
    height :20,
    justifyContent :'space-around'
    
  },

});
export default App;