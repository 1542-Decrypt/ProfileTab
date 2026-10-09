import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <Text style={styles.title}>Junior Frontend Developer</Text>
          <Text style={styles.bio}>
            Люблю C#, путешествия и сидеть с ноутом (обязательно мак) в старбаксе. Делаю вид что разрабатываю что то уже 15 лет.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Навыки</Text>
          <View style={styles.skillbox}>
            <Text style={styles.skill}>C#</Text>
            <Text style={styles.skill}>Python</Text>
            <Text style={styles.skill}>Lua</Text>
            <Text style={styles.skill}>JavaScript</Text>
            <Text style={styles.skill}>Unity</Text>
            <Text style={styles.skill}>Aseprite</Text>
            <Text style={styles.skill}>Adobe Photoshop</Text>
            <Text style={styles.skill}>Adobe Illustrator</Text>
            <Text style={styles.skill}>Adobe Animate</Text>
            <Text style={styles.skill}>Figma</Text>
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
  skill: {
    backgroundColor: '#8d4c17',
    color: 'orange',
    padding: 3,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'orange',
    borderRadius: 15,
    borderWidth: 1,
    textAlign: 'center'
  },
  skillbox:{
      gap: 6,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
  }
});
