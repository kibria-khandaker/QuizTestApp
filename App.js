import React, { useState } from 'react';
import { View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import AboutScreen from './src/screens/AboutScreen'; // ← এখন ব্যবহার হচ্ছে

export default function App() {
  const [screen, setScreen] = useState('home');

  // navigation functions
  const navigateToCategory = () => setScreen('category');
  const goToHome = () => setScreen('home');
  const goToAbout = () => setScreen('about');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'home' && (
        <HomeScreen
          navigateToCategory={navigateToCategory}
          goToAbout={goToAbout}
        />
      )}

      {screen === 'category' && (
        <CategoryScreen goToHome={goToHome} />
      )}

      {screen === 'about' && (
        <AboutScreen goBack={goToHome} />
      )}
    </View>
  );
}
