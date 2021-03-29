import { useState, useEffect } from 'react';

function usePrice(token: string, currency: string) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    function getPrice() {
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=${currency}`, {method: 'GET'})
            .then(data => data.json())
            .then(resp => {
                setPrice(resp[token][currency] || 0);
            })
    }

    getPrice();
  }, [token, currency])

  return price;
}

export default usePrice;