# QuizTest App

![React Native](https://img.shields.io/badge/React_Native-0.72.5-blue?style=flat-square)
![Expo](https://img.shields.io/badge/Expo-Managed-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

🎯 **Project Name:** QuizTest  
✅ **React Native Expo Project**  

Simple React Native Quiz app built with Expo.  

---

## Features

- Timer per question  
- Correct/Wrong option highlight  
- Sound & Vibration feedback  
- High score tracking  
- Flashcard style UI  

---

🔹Project Structure:
```
QuizTest/
│
├── App.js
├── app.json
├── package.json
└── node_modules/
```

🔹Folder Structure
```
 src
 src\data
 src\screens
 src\components
 ```

🔹Folder and files Structure
```
src/data/questions.js
src/screens/QuizScreen.js
src/screens/ResultScreen.js
src/components/OptionButton.js
```

🔹Final structure:
```
QuizTestApp/
│
├── App.js
│
├── src/
│   ├── data/
│   │   └── questions.js
│   │
│   ├── screens/
│   │   ├── QuizScreen.js
│   │   └── ResultScreen.js
│   │
│   └── components/
│       └── OptionButton.js
│
└── package.json
```

🔹Start Create File:
```
touch src/data/questions.js
touch src/screens/QuizScreen.js
touch src/screens/ResultScreen.js
touch src/components/OptionButton.js
```


---

## Installation & Running

1. Clone the repo:

```bash
git clone https://github.com/kibria-khandaker/QuizTestApp.git
cd QuizTestApp
```


2. Install:
```
Node.js install
npm install
npm install -g expo-cli

```


2.A Template choose For which installation for your:

- JavaScript Blank: ***
```
npx create-expo-app QuizTestApp --template blank
```

- TypeScript:
```
npx create-expo-app QuizTestApp --template blank-typescript
```

- Tabs:
```
npx create-expo-app QuizTestApp --template tabs
```




3. Run the app (Expo):
```
npx expo start
```

4. Open on your device:

```
Android: Scan QR code with Expo Go app

iOS: Scan QR code with Expo Go app or use TestFlight

Web: Press w in terminal
```

Create Initial Files (if needed)
```
touch src/data/questions.js
touch src/screens/QuizScreen.js
touch src/screens/ResultScreen.js
touch src/components/OptionButton.js
```

Notes
- Make sure to add assets/ folder with correct.mp3 and wrong.mp3 for sound feedback.
- Use physical device to test vibration and sound.
- Timer and high score logic are already implemented.
- App fully functional and ready for future feature enhancements.

