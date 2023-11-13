import React from 'react'
import {SearchNormal, Money, ArrowUp, Repeat, More, User, Car, Cake, Send, Shop, DiscountCircle, Windows} from 'iconsax-react-native';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Dimensions } from 'react-native'

const win = Dimensions.get('window').width

export default function App() {
  return (
    <ScrollView style={styles.container1}>
    <View style={styles.container1}>
      <View style={styles.container2}> 
      
        <View style={styles.containter3}>
        
            <View style={styles.search}>
            <SearchNormal style={{ justifyContent: 'center', alignSelf: 'center', marginLeft: 16, marginRight: 8 }} size={25} variant="Linear" color='grey'/>
            <TextInput style={{ color: 'black' }} placeholderTextColor="grey" placeholder="Cari..."/>
           
        </View>
         
        {/* <View style={styles.profil}></View> */}
       
      </View>
      <View style={styles.itemContainer}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ color: 'black', marginTop: 40, marginLeft: 10, fontSize:20, }}>Sprite</Text>
            <Text style={{ color: 'black', marginLeft: 10, fontSize:20 }}>Minuman Alami Yang Menyegarkan</Text>
            <Text style={{ color: 'black', marginLeft: 10, fontSize:10, fontStyle:"italic" }}>Coba Sekarang !</Text>
      </View>
      
      <Image
      style={styles.imagead}
      source={{ uri: 'https://m.media-amazon.com/images/I/41LPBHToqPL._SX300_SY300_QL70_FMwebp_.jpg' }}/>
      </View>    
    </View>
    <View style={styles.card}>
        <View style={styles.item}>
        
        <Money style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#246ef0'/>
          <View style={{ flexDirection: 'column', marginRight:15 }}>  
            <Text style={{marginRight:15, color:'#246ef0'}}>RP.15.000</Text>
            <Text style={{marginRight:15, color:'#246ef0'}}>15 coins</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems:'center', }}>  
          <ArrowUp style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#246ef0'/>
            <Text style={{ color:'#246ef0'}}>bayar</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems:'center', }}>  
          <Repeat style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#246ef0'/>
            <Text style={{ color:'#246ef0'}}>recent</Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems:'center', }}>  
          <More style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#246ef0'/>
            <Text style={{ color:'#246ef0'}}>lainnya</Text>
          </View>
        </View>
    </View>
    <View style={styles.card2}>

        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <User style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>GoJek</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <Car style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>GoCar</Text>
        </View> 
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <Cake style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>GoFood</Text>
        </View> 
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <Send style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>GoSend</Text>
        </View> 
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <Shop style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>GoMart</Text>
        </View> 
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <DiscountCircle style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>Mode Hemat</Text>
        </View> 
        <View style={{ flexDirection: 'column', alignItems:'center', margin:10, }}>  
        <More style={{ justifyContent: 'center', alignSelf: 'center'}} size={25} variant="Linear" color='#040506'/>
            <Text style={{ color:'#0a0a0a'}}>Lainnya</Text>
        </View>    
    </View>
    <Image
      style={styles.image}
      source={{ uri: 'https://lelogama.go-jek.com/post_featured_image/gakpakelama-header.png' }}/>
    
    
    </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  container1:{
    flex:1,
    backgroundColor:"#FFFFFF",
  },
    container2: {
    backgroundColor : "#00AA13",
    height:250, 
    
  },
  itemContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
   
  },
  containter3:{
    height:60,
    maxWidth:'100%',
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    padding: 10,
    borderRadius: 15,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    flexDirection: 'row',  
   },
  search:{
    flexDirection: 'row',
    borderRadius: 20,
    height: 35,
    width: '100%'
  },
  // profil:{
  //   backgroundColor:"#24bdba",
  //   padding :20,
  //   marginLeft:10,
  //   borderRadius: 20,

  // },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  card:{
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    padding: 20,
    borderRadius: 15, 
    marginLeft:20, 
    marginRight:20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  item:{
    color:'#0a0a0a',
    justifyContent:'space-between',
    padding: 1,
    flexDirection: 'row',
  },
  card2:{
    display: 'flex',
    backgroundColor: '#F5F8FF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    borderRadius: 15,
    marginLeft:20,
    marginRight:20,
    elevation: 4,
  },
  itemcard:{
    color: '#580858', 
    padding:10,
    margin:10,
    justifyContent:'space-between',
  },
  image: {
    margin:10,
    borderRadius: 15,
    Width:300,
    height:200,
  },
  imagead:{
    margin:10,
    marginTop:20,
    borderRadius: 15,
    width: 150,
    height: 150,
  },
  navigation:{
    backgroundColor: '#1FFFFF',
    fontSize: 24,
    padding: 20,
    borderRadius: 15,
 }
})
