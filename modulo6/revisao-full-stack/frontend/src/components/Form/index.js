import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { goToEndOrder } from '../../routers/Coordinator';
import { MyOrderForm } from './style';

export default function Form({ productList, setProductList }) {
    const navigate = useNavigate();
    //visible de botões
    const [visebleBottonClient, setVisibleButtonClient] = useState(true)
    const [visebleBottonProduct] = useState(true)
    //Da\dos do Form
    const [form, onChange] = useForm({ client: "", product: "", qty: 1, deliveryDate: "" })
    //Dados Clientes
    const [dataClient, isloadingClient, upClient, setUpClient] = useRequestData('http://localhost:3003/clients');
    //Dados Produtos
    const [dataProduct, isloadingProduct] = useRequestData('http://localhost:3003/products');
    //---------------------------------- CLIENTEAS ----------------------------------------------------------------
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
    const selectCientButton = () => {
        setVisibleButtonClient(!visebleBottonClient)
    }

    //---------------------------------- PRODUTOS ----------------------------------------------------------------
    //CLIENTE SELECIONADO
    const selectProduct = !isloadingProduct && dataProduct && dataProduct.find((dProduct) => {
        return dProduct.name === form.product;
    })
    //add produto
    const addProduct = () => {
        console.log(productList);
        const newPproduct = selectProduct;
        newPproduct.qty = form.qty;
        setProductList([...productList, newPproduct])
    }
    //---------------------------------- ORDER ----------------------------------------------------------------

    const makeOrder = (e) => {
        e.preventDefault();
        if (!productList || !form.deliveryDate || !selectClient) {
            alert("Confira os dados")
        } else {
            const deliveryDateDb = `${form.deliveryDate.split("/")[2]}-${form.deliveryDate.split("/")[1]}-${form.deliveryDate.split("/")[0]}`
            const productListDB = productList.map((p) => {
                return { "id": p.id, "qty": Number(p.qty) }
            })
            const body = {
                "fk_client": Number(selectClient.id),
                "delivery_date": deliveryDateDb,
                "products": productListDB
            }

            axios.post('http://localhost:3003/order', body, {})
                .then((response) => {
                    console.log(response);
                    goToEndOrder(navigate)
                }
                ).catch((error) => {
                    console.log(error.message);
                }
                )
        }
    }

    return (
        <MyOrderForm onSubmit={makeOrder}>
            {selectClient && !visebleBottonClient &&
                <div>
                    <h1>Client:{selectClient.name}</h1>
                </div>
            }
            {/* //client */}
            {selectClient && !visebleBottonClient ||
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
                        <button type='button' onClick={() => { addCient() }} >Cadastar Cliente</button>}

                    {selectClient && visebleBottonClient &&
                        <button type='button' onClick={() => { selectCientButton() }} >Confirmar</button>}

                </div>
            }
            
            {/* //Prtoduct */}
            {selectClient && !visebleBottonClient &&
                <div id='select-product'>
                    <label htmlFor='product' >Produto </label>
                    <input id="product" list='dataProduct' name='product' value={form.product} onChange={onChange}></input>
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
                    <label htmlFor='qty' >Quantidade </label>
                    <input id="qty" type={"number"} name="qty" value={form.qty} onChange={onChange}></input>
                    <p>R$: {selectProduct && parseFloat(selectProduct.price * form.qty).toFixed(2)}</p>

                    {selectProduct && visebleBottonProduct && selectProduct.qty_stock >= form.qty &&
                        <button type='button' onClick={() => { addProduct() }}>Add</button>
                    }
                    {selectProduct && selectProduct.qty_stock < form.qty &&
                        <h3>Produto sem Estoque!</h3>
                    }
                </div>
            }
            {/* //Order */}
            {productList.length > 0 &&

                <div id='order'>
                    <label htmlFor='deliveryDate' >Data de entrega (DD/MM/AAAA) </label>
                    <input id="deliveryDate" name='deliveryDate' onChange={onChange} value={form.deliveryDate}></input>
                    <button type='submit'>Confirmar </button>
                </div>
            }
        </MyOrderForm>
    );
}