import React from 'react';
import SelectSearch from 'react-select-search';
import Fuse from 'fuse.js';
import './style.css';




export default function SelectFilter({options,placeholder,id}){

  
function fuzzySearch(options) {
  const fuse = new Fuse(options, {
      keys: ['name', 'groupName', 'items.name'],
      threshold: 0.3,
  });
  
  return (value) => {
      if (!value.length) {
          return options;
      }

      return fuse.search(value);
  };
}

  return(
    <SelectSearch
          options={options}
          search
          filterOptions={fuzzySearch}
          emptyMessage={() => <div style={{ textAlign: 'center', fontSize: '0.8em' }}>Não encontrado</div>}
          placeholder={placeholder}
          id={id}
      />

  )
} 
  

