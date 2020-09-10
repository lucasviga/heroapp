import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  ImageHero,
  Container,
  CardMain,
  ListCards,
  ButtonExplorer,
  ButtonExplorerText,
  CardListed,
  ImagemCard,
  DetailsCard,
  HeaderSearch,
  InputPesquisa,
} from './styles';

export default function Main({navigation}) {
  const [heroes, setHeroes] = useState([]);

  const [search, setSearch] = useState('');

  const [heroSelected, setHeroSelected] = useState();
  const [headerImage, setHeaderImage] = useState(
    'http://yoba.com.br/19/wp-content/uploads/2018/10/DCVol2Marquee_57466713405381.60938022.jpg',
  );

  const [loading, setLoading] = useState(false);

  async function loadHeroesNova() {
    try {
      const pesquisa = search;
      setLoading(true);
      const response = await api.get(`/search/${pesquisa}`);

      setHeroes(response.data.results);
      setLoading(false);
      console.log(search);
    } catch (error) {}
  }

  useEffect(() => {
    async function loadHeroes() {
      try {
        setLoading(true);
        const response = await api.get('/search/flash');

        setHeroes(response.data.results);
        setLoading(false);
      } catch (error) {}
    }
    loadHeroes();
  }, []);

  function handleNavigate(hero) {
    navigation.navigate('Details', {hero});
  }

  function handleChangeHeaderImage(item) {
    setHeaderImage(item.image.url);
    setHeroSelected(item);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderSearch>
        <Icon name="menu" color="#FFF" size={40} />
        <InputPesquisa
          placeholder="Pesquisar..."
          autoCapitalize="none"
          onChangeText={text => setSearch(text)}
          onSubmitEditing={loadHeroesNova}
        />
        <TouchableOpacity onPress={() => loadHeroesNova()}>
          <Icon name="search" color="#FFF" size={40} />
        </TouchableOpacity>
      </HeaderSearch>

      <Container>
        <CardMain>
          <ImageHero source={{uri: headerImage}} resizeMode="cover" />

          <ButtonExplorer onPress={() => handleNavigate(heroSelected)}>
            <ButtonExplorerText>Explorer</ButtonExplorerText>
          </ButtonExplorer>
        </CardMain>

        {loading ? (
          <ActivityIndicator color="#7159c1" size="large" />
        ) : (
          <ListCards
            data={heroes}
            key={heroes.id}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleChangeHeaderImage(item)}>
                <CardListed key={item.id}>
                  <ImagemCard
                    source={{uri: item.image.url}}
                    resizeMode="contain"
                  />
                  <DetailsCard>
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 20}}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}
                    >
                      <Text>{item.appearance.race}</Text>
                      <TouchableOpacity
                        onPress={() => handleNavigate(heroSelected)}
                      >
                        <Text style={{color: '#7159c1', fontWeight: 'bold'}}>
                          View hero{' '}
                          <Icon name="arrow-forward" color="#7159c1" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </DetailsCard>
                </CardListed>
              </TouchableOpacity>
            )}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}
