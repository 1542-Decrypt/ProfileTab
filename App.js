import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinkButton from "./components/LinkButton"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pinimg.com/1200x/3a/9b/38/3a9b38c6dd7f3d00fe239d1235975308.jpg' }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Хузеев Рамиль</Text>
          <Text style={styles.title}>Junior Developer | Senior 2D Pixel Artist</Text>
          <Text style={styles.bio}>
            Люблю C#, Aseprite. Терпеть не могу JS, Lua и Python. Разработчик на Unity с 4-летним стажем.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Навыки</Text>
          <View style={styles.skillbox}>
            <LinkButton text="C#" url="https://ru.wikipedia.org/wiki/C_Sharp"/>
            <LinkButton text="Python" url="https://ru.wikipedia.org/wiki/Python"/>
            <LinkButton text="Lua" url="https://ru.wikipedia.org/wiki/Lua"/>
            <LinkButton text="JavaScript" url="https://ru.wikipedia.org/wiki/JavaScript"/>
            <LinkButton text="Unity" url="https://unity.com"/>
            <LinkButton text="Aseprite" url="https://www.aseprite.org/"/>
            <LinkButton text="Adobe Photoshop" url="https://www.adobe.com/products/photoshop.html"/>
            <LinkButton text="Adobe Illustrator" url="https://www.adobe.com/products/illustrator.html"/>
            <LinkButton text="Adobe Premiere" url="https://www.adobe.com/products/premiere.html"/>
            <LinkButton text="Figma" url="https://www.figma.com/"/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#373434',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    // Тень для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    // Тень для Android
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Делаем круг
    marginBottom: 16
  },
  name: {
    color: "orange",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },
  title: {
    fontSize: 16,
    color: '#35aaae',
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: '#7d7b7b',
    textAlign: "justify"
  },
  skillbox:{
      gap: 6,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
  }
});
