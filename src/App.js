import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [btc, setBtc] = useState(0);
  const [conversion, setConversion] = useState(undefined);
  const [selectCoin, setSelectCoin] = useState('');

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const onSelect = (event) => setSelectCoin(event.target.value);
  const coinChange = (event) => setBtc(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setConversion(Math.floor(btc / selectCoin));
  };
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          <option>코인을 선택해주세요.</option>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <h2>코인 전환</h2>
        <form onSubmit={onSubmit}>
          <input
            onChange={coinChange}
            value={btc}
            type="number"
            placeholder="보유 중인 BTC를 입력해주세요."
          />
          <button>전환</button>
        </form>
        <div>
          전환 된 코인 수 : {conversion === undefined ? null : conversion}
        </div>
      </div>
    </div>
  );
}

export default App;
