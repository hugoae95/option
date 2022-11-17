import React from "react";
import "./Search.scss";
import { TextField } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";

export const Search = () => {
  const { handleSearch } = useSearch();
  return (
    <div className="search-box">
      <TextField
        className="search-go"
        placeholder="Ingresa el producto que desea buscar..."
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};
