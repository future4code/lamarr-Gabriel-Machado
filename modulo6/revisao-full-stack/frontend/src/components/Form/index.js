import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { MyOrderForm } from './style';

export default function Form() {
    const [visebleBottonClient,setVisibleButtonClient]=useState(true)
    //Da\dos do For
    const [form, onChange, restForm] = useForm({ client: "", product: "", qty: 1, deliveryDate: "" })
    //Dados Clientes
    const [dataClient, isloadingClient, erroClient,upClient,setUpClient] = useRequestData('http://localhost:3003/clients');
    //Dados Produtos
    const [dataProduct, isloadingProduct, erroProduct] = useRequestData('http://localhost:3003/products');
    //CLIENTE SELECIONADO
    const selectClient = !isloadingClient && dataClient && dataClient.find((dClient) => {
        return dClient.name === form.client;
    })




    //adicionar cliente
    const addCient = () => {
        const body =
        {
            "name": form.client
        }
        axios.post('http://localhost:3003/client', body, {})
            .then((response) => {
                setUpClient(!upClient);
                console.log(response);

            }
            ).catch((error) => {
                console.log(error.message);
            })
    }
    //selecionar cliente
    const selectCient = () => {
        setVisibleButtonClient(!visebleBottonClient)
    }




    console.log(selectClient);
    return (
        <MyOrderForm>
            <div>
                {selectClient&& !visebleBottonClient && <h1>Client:{selectClient.name}</h1>}
            </div>
            {/* //client */}
            <div id='selec-client'>

                <label htmlFor='client' >Nome do Cliente </label>
                <input id="client" list='dataClient' name='client' onChange={onChange} value={form.client}></input>
                <datalist id='dataClient'>
                    {/* <option> Jr </option>
                    <option> Paulo </option>
                    <option> José </option>
                    <option> Maria </option> */}
                    {isloadingClient && !dataClient && <option>Carregando..</option>}
                    {!isloadingClient && dataClient && dataClient.map((client) => {
                        return <option key={client.id} >
                            {client.name}
                        </option>
                    })}
                </datalist>
                {!selectClient && (form.client.length > 2) && 
                <button type='button' onClick={()=>{addCient()}} >Cadastar Cliente</button>}
                
                {selectClient && visebleBottonClient && 
                <button type='button' onClick={()=>{selectCient()}} >Confirmar</button>}

            </div>
            {/* //Prtoduct */}
            <div id='select-product'>
                <label htmlFor='product' >Produto </label>
                <input id="product" list='dataProduct'></input>
                <datalist id='dataProduct'>
                    {/* <option> Banana </option>
                    <option> Mamão </option>
                    <option> Macã </option>
                    <option> Goiaba </option> */}
                    {isloadingProduct && !dataProduct && <option>Carregando..</option>}
                    {!isloadingProduct && dataProduct && dataProduct.map((product) => {
                        return <option key={product.id} >
                            {product.name}
                        </option>
                    })}
                </datalist>
                <label>Quantidade </label>
                <input id="qty" type={"number"}></input>
                <p>R$: 10000</p>
                <button>Ok</button>
            </div>
            {/* //Order */}
            <div id='order'>
                <label htmlFor='deliveryDate' >Data de entrega (DD/MM/AAAA) </label>
                <input id="deliveryDate" ></input>
                <button>Confirmar </button>
            </div>
        </MyOrderForm>
    );
}