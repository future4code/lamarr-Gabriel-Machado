import React from 'react';
import { MyOrderForm } from './style';

export default function Form() {
    return (
        <MyOrderForm>
            {/* //client */}
            <div id='selec-client'>
                <label htmlFor='client' >Nome do Cliente </label>
                <input id="client" list='dataClient'></input>
                <datalist id='dataClient'>
                    <option> Jr </option>
                    <option> Paulo </option>
                    <option> José </option>
                    <option> Maria </option>
                </datalist>
                <button>Confirmar</button>
            </div>
            {/* //Prtoduct */}
            <div id='select-product'>
                <label htmlFor='product' >Produto </label>
                <input id="product" list='dataProduct'></input>
                <datalist id='dataProduct'>
                    <option> Banana </option>
                    <option> Mamão </option>
                    <option> Macã </option>
                    <option> Goiaba </option>
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