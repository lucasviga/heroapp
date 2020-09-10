import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  CardMain,
  Image,
  Heroes,
  HeroName,
  HeroDescription,
  HeroInfo,
  Title,
  Text,
  AbilitiesContent,
  Abilities,
  Stats,
  NameStats,
  RoundStats,
  ValueStats,
} from './styles';

export default function Details({navigation}) {
  const hero = navigation.getParam('hero');

  console.log(hero);

  return (
    <Container>
      <Content>
        <CardMain>
          <Image resizeMode="cover" source={{uri: hero.image.url}} />
        </CardMain>

        <Heroes>
          <HeroName>{hero.name}</HeroName>
          <HeroDescription>{hero.biography['full-name']}</HeroDescription>
        </Heroes>
      </Content>

      <HeroInfo>
        <Title>Biography</Title>

        <Text>Full name: {hero.biography['full-name']}</Text>
        <Text>
          Other names:{' '}
          {hero.biography.aliases.map(item => (
            <Text key={item}>{item}, </Text>
          ))}
        </Text>
        <Text>First apperance in {hero.biography['first-appearance']}</Text>
        <Text>Relatives: {hero.connections.relatives}</Text>

        <Title>Work</Title>
        <Text>{hero.work.base}</Text>
        <Text>{hero.work.occupation}</Text>

        <Title>Connections</Title>

        <Text>{hero.connections['group-affiliation']}</Text>
        <Text>{hero.connections.relatives}</Text>
      </HeroInfo>

      <AbilitiesContent>
        <Title>Abilities</Title>
        <Abilities>
          <Stats>
            <NameStats>Intelligence</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.intelligence}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Speed</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.speed}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Power</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.power}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Durability</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.durability}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Combat</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.combat}</ValueStats>
            </RoundStats>
          </Stats>

          <Stats>
            <NameStats>Strength</NameStats>
            <RoundStats>
              <ValueStats>{hero.powerstats.strength}</ValueStats>
            </RoundStats>
          </Stats>
        </Abilities>
      </AbilitiesContent>
    </Container>
  );
}

Details.navigationOptions = ({navigation}) => ({
  title: 'Back',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Main')}>
      <Icon name="chevron-left" size={30} color="#fff" />
    </TouchableOpacity>
  ),
});
