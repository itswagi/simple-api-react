import React from 'react';
import {
  SearchBarContainer,
  SearchBarInput,
  SearchIconContainer,
  SearchButton,
} from './styles';
import { BsSearch } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useApp } from '../../state/hooks';
import { searchArtistAPI } from '../../state/api';
import { ActionType } from '../../utils/constants/context';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

type FormData = {
  name: string;
};

export const SearchBar: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();
  const {
    state: {
      status: { search },
    },
    dispatch,
  } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = (data: FormData) => {
    if (search !== ActionType.LOADING) {
      searchArtistAPI(dispatch, data);
    }
  };

  useEffect(() => {
    const name = searchParams.get('artist');
    const searchedTerm = getValues('name');
    if (name !== searchedTerm && search === ActionType.IDLE) {
      name && searchArtistAPI(dispatch, { name: name });
    }
    if (search === ActionType.FULFILLED) {
      if (getValues('name')) {
        setSearchParams({ artist: getValues('name') });
      }
    }
  }, [dispatch, getValues, search, searchParams, setSearchParams]);

  return (
    <SearchBarContainer
      onSubmit={handleSubmit(onSubmit)}
      error={errors?.name ? true : false}
    >
      <SearchBarInput
        type="text"
        placeholder="Search Artist"
        {...register('name', { required: true })}
      />
      <SearchIconContainer>
        <SearchButton type="submit">
          <BsSearch />
        </SearchButton>
      </SearchIconContainer>
    </SearchBarContainer>
  );
};
