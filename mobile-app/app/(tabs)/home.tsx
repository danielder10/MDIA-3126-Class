import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
        <Text>This Is My Home Page</Text>
        <Link href="/rest">Rest Page</Link>
    </View>
  );
}