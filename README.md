
# 🧠 Memory Game - React + Firebase + Deck of Cards API

A dynamic card-matching memory game built with **React** and deployed using **Vite + GitHub Pages**. It fetches random card images from the **Deck of Cards API** and stores the user’s score and time to a **Firebase Firestore leaderboard**.

---

## 🚀 How to Run the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/mohit716/Memory_Game_React.git
cd Memory_Game_React
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the app in development
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🌐 How to Deploy to GitHub Pages

### 1. Update vite.config.js
```js
export default defineConfig({
  base: '/Memory_Game_React/',
  plugins: [react()],
})
```

### 2. Build the app
```bash
npm run build
```

### 3. Deploy using gh-pages
```bash
npm run deploy
```

Your app will be available at:  
👉 https://mohit716.github.io/Memory_Game_React/

---

## 🧪 Sample Use Cases

### Use Case 1: Starting a New Game
- The user clicks on **"New Game"**.
- 8 random cards are fetched from the Deck of Cards API.
- Cards are duplicated and shuffled to form a 4x4 grid.
- All cards appear face-down until flipped.

### Use Case 2: Playing the Game
- The user selects two cards.
- If the cards match, they remain flipped.
- If they don’t match, they flip back after a second.
- The **move counter** and **timer** are active during play.

### Use Case 3: Completing the Game
- Once all cards are matched, a **“Game Over”** message is displayed.
- The game records the number of moves and time taken.
- If Firebase is connected, the score is stored in Firestore.

### Use Case 4: Viewing Scores (Firebase Leaderboard)
- The leaderboard captures user scores (moves & time) in Firebase.
- Future improvements can include displaying a top-scores board.

---

## 💡 Strengths of the Project

-  **Dynamic API integration** – new cards every game using Deck of Cards API
-  **Firebase Firestore backend** – stores leaderboard entries
-  **Clean UI** – improved layout, grid styling, smooth animations
-  **Online hosting** – deployed to GitHub Pages for public access

---

## 🛠️ Potential Improvements

- 🏆 Add a visual leaderboard (top scores by moves/time)
- 🎮 Add game difficulty levels (e.g. 4x4, 6x6 grids)
- 🔐 Add Firebase Authentication for unique players
- 📱 Improve mobile responsiveness
- ✅ Add win sound/animation effects

---

## 👨‍💻 Author

**Mohit Sharma**  
MS in Computer Science  
INFO 655 - Intro to Web Programming  
Drexel University (2025)
