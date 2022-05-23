

import {
  BrowserRouter,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";

import { Pictures } from "./Components/Pictures";

import LandingPage from "./Components/LandingPage";


import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Imagesearch.github.io" element={<LandingPage />} />
          <Route path="/photo/:photoId" element={<Pictures />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
