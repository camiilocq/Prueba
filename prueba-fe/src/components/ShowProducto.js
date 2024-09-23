import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';

const ShowProducto = () => {
    const url = 'https://localhost:7245/api/Producto/api/Producto/GetProductos';
    const [productos, setProducts] = useState([]);
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [caracteristica, setCaracteristica] = useState('');
    const [precio, setPrecio] = useState('');
    const [operacion, setOperacion] = useState('');
    const [title, setTitle] = useState('');
    
    useEffect ( ()=> {
        getProductos();
    },[]);

    const getProductos = async () => {
        const respuesta = await axios.get(url);

    }
 

  return (
    <div className='App'>
        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-md-4 offset-4'>
                    <div className='d-grid mx-auto'>
                        <button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProductos'>
                            <i className='fa-solid fa-circlie-plus'></i> Añadir
                        </button>
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offset-lg-12'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr><th>#</th><th>PRODUCTOS</th><th>DESCRIPCION</th><th>Precio</th><th></th></tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                    {productos.map( (producto, i) => 
                                        <tr key={producto.id}>
                                            <td>{(i+1)}</td>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.caracteristica}</td>
                                            <td>{new Intl.NumberFormat('es-cop').format(producto.precio)}</td>
                                                <td>
                                                    <button className='btn btn-warning'>
                                                        <i className='fa-solid fa-edit'></i>
                                                    </button>
                                                    &nbsp;
                                                    <button className='btn tbn-danger'>
                                                        <i className='fa-solid fa-trash'></i>
                                                    </button>
                                                </td>
                                        </tr>
                                    )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default ShowProducto
