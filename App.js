import { SafeAreaProvider} from 'react-native-safe-area-context';

import Nav from './components/Global/Nav'
import { DataProvider } from './Context/context';

export default function App() {
   
  return (
    <DataProvider>
      <SafeAreaProvider>
        <Nav /> 
      </SafeAreaProvider>
    </DataProvider>
  );
}
