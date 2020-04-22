import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';
import { Container, ProductTable, Total } from './styles';

import * as CartActions from '../../store/modules/cart/action';

export default function Cart() {
  const total = useSelector(state => formatPrice(
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)),
  );

  const cart = useSelector(state => state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })));

  const dispach = useDispatch();

  function increment(product) {
    dispach(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function descrement(product) {
    dispach(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
        <tr>
          <th/>
          <th>Produto</th>
          <th>QTD</th>
          <th>SubTOTAL</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {cart.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt={product.title}/>
            </td>
            <td>
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => descrement(product)}>
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>
                <input type="number" readOnly value={product.amount}/>
                <button type="button" onClick={() => increment(product)}>
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
              <strong>{product.subtotal}</strong>
            </td>
            <td>
              <button type="button" onClick={() => dispach(CartActions.removeFromCart(product.id))}>
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
