import { Text , View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View>
        <Text>This Is My Index Page</Text>
        <Link href="/home">Home Page</Link>
        <Link href="/rest">Rest Page</Link>
    </View>
  );
}