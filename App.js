
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Routes from './src/routes';
import UserStorage from './src/UserContext';
export default function App() {
  return (
    
    <Routes>
      <UserStorage>

      </UserStorage>
    </Routes>

  );
}

