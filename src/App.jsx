import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Content from "./pages/Content";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/aptitude-notes" element={<Content />} />
        <Route path="/spm-notes" element={<Content />} />
        <Route path="/english-grooming-notes" element={<Content />} />
        <Route path="/cloud-computing-notes" element={<Content />} />
        <Route path="/professional-ethics-notes" element={<Content />} />
        <Route path="/data-science-r-notes" element={<Content />} />
        <Route path="/data-science-r-lab-notes" element={<Content />} />
        <Route path="/casd-notes" element={<Content />} />
        <Route path="/casd-lab-notes" element={<Content />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
