import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/HomePage';
import { Tweets } from './pages/TweetsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
