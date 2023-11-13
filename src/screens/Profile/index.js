import { Flash, Logout, LogoutCurve, Notification, Setting, Setting2, Star, Star1, UserEdit } from 'iconsax-react-native';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, marginTop: 20, marginBottom: 10 }}>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Profile</Text>
      </View>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <View style={{ ...styles.imageContainer, paddingHorizontal: 20, marginBottom: 20 }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              }}
              style={{ ...styles.profileImage }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.profileName}>RAFID ARTUR PRASETYA</Text>
              <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                <Star1 color={'rgb(255, 125, 0)'} variant="Linear" size={24} />
                <Text style={{ ...styles.profileInfo, color: 'rgb(255, 125, 0)', fontWeight: 'bold', paddingLeft: 5, }}>Pemilik</Text>
              </View>
            </View>
          </View>


          <View style={{}}>
            <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
              <Text style={{ ...styles.profileInfo, color: 'black', fontWeight: 'bold', }}>General</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <UserEdit color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Edit Profile Saya</Text>
                <Text style={styles.profileSettingDesc}>Perbarui informasi personal anda</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <Setting2 color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Pengaturan</Text>
                <Text style={styles.profileSettingDesc}>Edit keamanan dan pengaturan lainnya</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingHorizontal: 24, marginBottom: 25, }}>
              <LogoutCurve color={'green'} variant="Linear" size={24} />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.profileSetting}>Log Out</Text>
                <Text style={styles.profileSettingDesc}>Keluar dari akun anda</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor: 'white',
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 15,
  },
  card: {
    width: '48%',
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'green',
  },
  profileName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  profileBio: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },
  profileNumber: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  profileSetting: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  profileSettingDesc: {
    color: 'black',
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 10,
  },
  profileInfo: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
  },
  likedPhotosText: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  informationContainer: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 24,
    marginVertical: 24,
    flexDirection: 'row',
    borderRadius: 25,
    padding: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  }
});