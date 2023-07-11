import { useState } from 'react';
import { Button } from 'antd';

interface SearchBarProps {
  setSearchTerm: (searchTerm: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const [value, setValue] = useState('');
  const { setSearchTerm } = props;

  return (
    <div className='flex items-center gap-4 w-full'>
      <input
        className='w-1/2 h-4 p-6 rounded-md border border-blue-900 outline-none ring-0'
        placeholder='Search...'
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setSearchTerm(value);
          }
        }}
      />

      <div className='items-center justify-between p-2 border border-blue-900 rounded-lg text-sm text-blue-900 cursor-pointer hover:bg-blue-100 active:bg-blue-300' onClick={()=>{
        setSearchTerm(value);
      }}>Search</div>
    </div>
  );
}
