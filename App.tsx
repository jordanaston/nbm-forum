import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
