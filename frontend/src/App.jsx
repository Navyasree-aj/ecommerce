```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Discover from "./pages/catalog/Discover";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
```
