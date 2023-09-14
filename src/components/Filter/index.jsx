import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions';
import {
  StyledFilter,
  StyledLabelFilter,
  StyledFilterInput,
} from './StyledFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <StyledFilter>
      <StyledLabelFilter>
        <StyledFilterInput
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search for contact"
        />
      </StyledLabelFilter>
    </StyledFilter>
  );
};

export default Filter;
