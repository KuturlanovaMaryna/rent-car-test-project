import { useState } from 'react';
import {
  SearchButton,
  SelectedForm,
  StyledInputForm,
  TextInput,
} from './Filter.styled';

const brands = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

const FiltersForm = ({ onClick }) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    onClick(value);
  };

  return (
    <StyledInputForm>
      <div onClick={() => setOpen(!open)}>
        <TextInput>Car brand</TextInput>
        <SelectedForm>{selected ? selected : 'Select a brand'}</SelectedForm>

        <ul className={`dropDown ${open ? 'visible' : 'hidden'}`}>
          {brands.map((brand) => (
            <li
              key={brand}
              onClick={() => {
                if (brand.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(brand);
                  setOpen(false);
                  setValue(brand);
                }
              }}
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
      <SearchButton onClick={handleClick}>Search</SearchButton>
    </StyledInputForm>
  );
};

export default FiltersForm;
