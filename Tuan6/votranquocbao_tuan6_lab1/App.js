import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: "Ca nấu lẩu, mi mini",
    shop:"Shop DeVang",
    image: require('./assets/ca_nau_lau.png')
    
  },
  {
    id: '2',
    title: "1 KG khô gà bơ tỏi",
    shop:"Shop LTD Food",
    image: require('./assets/ga_bo_toi.png')
    
  },
  {
    id: '3',
    title: "Xe cần cẩu đa năng",
    shop:"Shop Thế giới đồ chơi",
    image: require('./assets/xa_can_cau.png')
    
  },
  {
    id: '4',
    title: "Đồ chơi dạng mô hình",
    shop:"Shop Thế giới đồ chơi",
    image: require('./assets/do_choi_dang_mo_hinh.png')
    
  },
  {
    id: '5',
    title: "Lãnh đạo đơn giản",
    shop:"Shop Minh Long Book",
    image: require('./assets/lanh_dao_gian_don.png')
    
  },
  {
    id: '6',
    title: "Hiểu lòng con trẻ",
    shop:"Shop Minh Long Book",
    image: require('./assets/hieu_long_con_tre.png')
    
  }
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.textContainer}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemShop}>{item.shop}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.chatButton}> 
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={{marginLeft :15,width : 24,height :24}} source={require('./assets/ant-design_arrow-left-outlined(1).png')}/>
        <Text style={styles.itemName} style={{color:'white',fontSize :20}}>Chat</Text>
        <Image style={{marginRight :15,width : 24,height :24}} source={require('./assets/bi_cart-check.png')}/>
      </View>
      <View style={styles.text}>
        <Text style={{fontSize :15}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng</Text>
        <Text>ngại chat với shop!</Text>
      </View>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <View style={styles.iconNav}>
          <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
          <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
          <Image style={{marginLeft :15}} source={require('./assets/Vector3.png')}/>
        </View>
        
        <Image source={require('./assets/Vector2.png')}/>
        <Image style={{marginRight :15,width : 24,height :24}} source={require('./assets/Vector1.png')}/>
      </View>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
   container: {
    flex :1, 
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  text:{
    marginLeft :15,
    marginRight :15,
    marginTop :10
  },
  nav:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent :'space-between',
    backgroundColor : '#1BA9FF',
    height : 40,
  },
  iconNav :{
    flexDirection :'column',
    height :20,
    justifyContent :'space-around'
    
  },
  footer:{

    flexDirection:'row',
    alignItems:"center",
    justifyContent :'space-between',
    backgroundColor : '#1BA9FF',
    height : 40,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemShop: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: '#ff3d00',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;