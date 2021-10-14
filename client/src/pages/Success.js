import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div>
      <Jumbotron>
        <h1>Tri̶u̶m̶p̶
̶h!</h1>
        <h2>Yȏ̾ͤ͛ͨ̋u̸̔ͣͨ͐͌ ͬ̚͝͡Rͫ͋ͥḯ̔̑̓ͭ̎͟͜͞ch!</h2>
        <h2>... rediṛ͎̼͌ͤ̉é͕̪̬̬c͕̱̜̗t͓͌̏ing t̴̖̞̩̠̘͉̠ͯ̃̈́o N🅵🆃_🅼🅰🆁ket̴̖̞̩̠̘͉̠ͯ̃̈́</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
