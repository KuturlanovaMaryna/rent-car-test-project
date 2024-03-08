import { useState } from 'react';
import { brends } from '../DataBrends/DataBrends';
import css from './Filter.styled.css';

export const Filter = ({ onFilterSubmit }) => {
  const [brend, setBrend] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const prices = [];
  for (let i = 20; i <= 500; i += 10) {
    prices.push(<option key={i} value={`$${i}`}>{`$${i}`}</option>);
  }

  const checkFilter = () => {
    if (brend || price || from || to) return true;
    else return false;
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case 'brend': {
        setBrend(e.target.value);
        break;
      }
      case 'price': {
        setPrice(e.target.value);
        break;
      }
      case 'from': {
        setFrom(e.target.value);
        break;
      }
      case 'to': {
        setTo(e.target.value);
        break;
      }
      default:
        break;
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === 'search') {
      const filter = { brend, price, from, to };
      onFilterSubmit(filter);
    }
    if (e.nativeEvent.submitter.name === 'clear') {
      e.currentTarget.reset();
      setBrend('');
      setPrice('');
      setFrom(0);
      setTo(0);
      onFilterSubmit(null);
    }
  };

  return (
    <div className={css.filterContainer}>
      <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.label}>
          Car brand
          <select
            name="brend"
            className={css.select}
            defaultValue={'DEF'}
            onChange={onChange}
          >
            <option value="DEF" disabled hidden>
              Enter the text
            </option>
            {brends.map((brendsItem) => {
              return (
                <option key={brendsItem} value={brendsItem}>
                  {brendsItem}
                </option>
              );
            })}
          </select>
        </label>
        <label className={css.label}>
          Price/ 1 hour
          <select
            name="price"
            className={css.select}
            defaultValue={'DEF'}
            onChange={onChange}
          >
            <option value="DEF" disabled hidden>
              To $
            </option>
            {prices.map((price) => {
              return price;
            })}
          </select>
        </label>

        <label className={css.label}>
          Сar mileage / km{' '}
          <div>
            <input
              name="from"
              type="number"
              className={css.leftInput}
              placeholder="From"
              onChange={onChange}
            />
            <input
              name="to"
              type="number"
              className={css.rightInput}
              placeholder="To"
              onChange={onChange}
            />
          </div>
          {checkFilter() && (
            <button
              type="submit"
              name="clear"
              title="clear form"
              className={css.clearFilter}
            >
              x
            </button>
          )}
        </label>
        <button type="submit" name="search" className={css.filterBtn}>
          Search
        </button>
      </form>
    </div>
  );
};
