import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form'
import { useParams } from 'react-router-dom';
import Global from './Global'

const OrderAdd = () => {

    const {userid} = useParams();

    const {url} = Global;

    const [usersInfo, setUsersInfo] = useState({});
    const [clients, SetClients] = useState([]);

    const [status, setStatus] = useState(false);

    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            created: Date.now(),
            clientId: 1,
            statusId: 1
        }
    });

    const getUsers = () => {
       
        axios.get(url + "userinfo/info/" + userid)
            .then(res => {
                setUsersInfo(res.data)
            })
    }

    const getClients = () => {
        axios.get(url + "client")
            .then(res => {
                SetClients(res.data)
                setStatus(true)
            })
    }

    useEffect(() => {
        getUsers();
        getClients();

    }, []);

    if (status){
        return (
            <div className='container'>
    
                <div className='row'>
                    <h1>Adding an Order</h1>
                    <div className='col-auto'>
                        <span><strong>{usersInfo.first + ' '+ usersInfo.last}</strong></span>
                    </div>
                </div>
    
                <form>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row m-4">
                        <div className='col-4'></div>
                        <div className="col-4 mb-3">
                            <label className="form-label">Select the client</label>
                            <select className="form-select" 
                                    aria-label="Default select example"
                                    {...register('clientId', {required:true})}
                                    >
                                {clients.map(client =>
                                    <option key={client.id} value={client.id}>{client.client}</option>
                                )}
                    
                            </select>
                            {errors.clientId?.type === 'required' && <p>The client must be entered</p>}
                        </div>
                        
                    </div>
    
                    <button type="submit" className="btn btn-primary btn-block mb-4">Place order</button>
         
                </form>
                
            </div>
        );
    }
    
}

export default OrderAdd;
