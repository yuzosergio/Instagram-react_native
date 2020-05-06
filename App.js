import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/Lista';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {
          id: '1', 
          nome: 'Edelgard', 
          descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          imgperfil: 'https://i.imgur.com/1ycdaFC.png', 
          imgPublicacao: 'https://i.imgur.com/so6S8EB.png',
          likeada: true, 
          likers:70
        },
        {
          id: '2', 
          nome: 'Petra', 
          descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          imgperfil: 'https://i.imgur.com/yalr54w.png', 
          imgPublicacao: 'https://i.imgur.com/cu3DZPy.png',
          likeada: false, 
          likers:51
        },
        {
          id: '3', 
          nome: 'Dorothea', 
          descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
          imgperfil: 'https://i.imgur.com/Yi2ON76.png', 
          imgPublicacao: 'https://i.imgur.com/TuB8izL.png',
          likeada: false, 
          likers:50
        },
      ]
    };

  }

  render(){
    return (
    <View style={styles.container}>
      
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
        source={require('./src/img/logo.png')}
        style={styles.logo}
        />
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Image
        source={require('./src/img/send.png')}
        style={styles.send}
        />
      </TouchableOpacity>
      
    </View>

    <FlatList
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    data={this.state.feed}
    renderItem={({item}) => <Lista data={item} />}
    />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:25,
  },
  header:{
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation:1,
  },
  logo:{

  },
  send:{
    width: 23,
    height: 23,
  },
});

export default App;