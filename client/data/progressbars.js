import {MdGrade, MdFavorite} from 'react-icons/lib/md';
import React from 'react';

const progressbars = [
  {
    type: 'Health',
    progress: 30,
    symbol: <MdFavorite />
  },
  {
    type: 'Experience',
    progress: 20,
    symbol: <MdGrade />
  }
];

export default progressbars;
