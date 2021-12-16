import React from "react";
import { SearchBarContainer, SearchBarInput, SearchIconContainer, SearchButton } from "./styles";
import  { BsSearch }  from 'react-icons/bs'
import { useForm } from "react-hook-form";
import { useApp } from "../../state/hooks";
import { searchArtistAPI } from "../../state/api";
import { ActionType } from "../../utils/constants/context";


type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string | null>>
}

type FormData = {
  name: string
}

export const SearchBar: React.FC<Props> = ({ setSearchTerm }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const { state: { status: {search} }, dispatch } = useApp()
  const onSubmit = async (data: FormData) => {
    if(search !== ActionType.LOADING)
      await searchArtistAPI(dispatch, data);
      setSearchTerm(data.name)
  }
  return (
    <SearchBarContainer 
      onSubmit={handleSubmit(onSubmit)} 
      error={ errors?.name ? true : false }
    >
      <SearchBarInput
        type="text" placeholder="Search Artist" {...register("name", {required: true})}
        />
      <SearchIconContainer>
        <SearchButton type="submit" >
          <BsSearch />
        </SearchButton>
      </SearchIconContainer>
    </SearchBarContainer>
  )
}