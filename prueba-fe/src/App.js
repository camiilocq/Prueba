import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShowProducto from './components/ShowProducto';
import ShowEmpresa from './components/ShowEmpresa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Producto' element={<ShowProducto></ShowProducto>}></Route>
        <Route path='/Empresa' element={<ShowEmpresa></ShowEmpresa>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
