import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.paragraph}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
        augue ut turpis rhoncus dignissim. Morbi sed nibh ut tellus tristique
        pharetra in eget diam.
      </Text>

      <Text
        style={[styles.paragraph, styles.paragraph2]}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
        augue ut turpis rhoncus dignissim. Morbi sed nibh ut tellus tristique
        pharetra in eget diam.
      </Text>
      <Text
        style={[styles.paragraph, styles.paragraph3]}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
        augue ut turpis rhoncus dignissim. Morbi sed nibh ut tellus tristique
        pharetra in eget diam.
      </Text>
      <Text
        style={[styles.paragraph, styles.paragraph4]}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
        augue ut turpis rhoncus dignissim. Morbi sed nibh ut tellus tristique
        pharetra in eget diam.
      </Text>
      <Text
        style={[styles.paragraph, styles.paragraph5]}
        numberOfLines={1}
        adjustsFontSizeToFit={true}
      >
        5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
        augue ut turpis rhoncus dignissim. Morbi sed nibh ut tellus tristique
        pharetra in eget diam.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    backgroundColor: 'blue',
    padding: 2,
    marginBottom: 10,
    fontSize: 18,
    color: 'white',
  },
  paragraph2: {
    fontSize: 23,
  },
  paragraph3: {
    fontSize: 25,
  },
  paragraph4: {
    fontSize: 28,
  },
  paragraph5: {
    fontSize: 30,
  },
});
