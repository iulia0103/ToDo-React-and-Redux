import {MdGrade, MdFavorite} from 'react-icons/lib/md';
import React from 'react';

const progressbars = [
  {
    type: 'Health',
    progress: 0,
    symbol: <MdFavorite />,
  },
  {
    type: 'Experience',
    progress: 0,
    symbol: <MdGrade />,
  }
];

export default progressbars;
