import { Route, Routes, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { AppWrapper } from './App.styled';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const Favorite = lazy(() => import('./pages/FavoritePage/FavoritePage'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
