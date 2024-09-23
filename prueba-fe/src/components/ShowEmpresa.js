import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../functions';

const ShowEmpresa = () => {
    const url = 'https://localhost:7245/api/Empresa/api/Empresa/GetEmpresas';
    const [empresas, setEmpresas] = useState([]);
    const [nit, setNit] = useState('');
    const [nombre, setNombre] = useState('');
    const [direccion, detDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [operacion, setOperacion] = useState('');
    const [title, setTitle] = useState('');
    
    useEffect ( ()=> {
        getEmpresas();
    },[]);

    const getEmpresas = async () => {
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
                                <tr><th>#</th><th>nit</th><th>Nombre</th><th>Direccion</th><th>Telefono</th></tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                    {empresas.map( (Empresa, i) => 
                                        <tr key={Empresa.id}>
                                            <td>{(i+1)}</td>
                                            <td>{Empresa.nombre}</td>
                                            <td>{Empresa.direccion}</td>
                                            <td>{Empresa.telefono}</td>
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

export default ShowEmpresa
