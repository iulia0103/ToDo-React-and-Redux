import {MdGrade, MdFavorite} from 'react-icons/lib/md';
import React from 'react';

const progressbars = [
  {
    type: 'Health',
    progress: 30,
    symbol: <MdFavorite />,
    color: '#ffb3cc'
  },
  {
    type: 'Experience',
    progress: 20,
    symbol: <MdGrade />,
    color: '#ffff80'
  }
];

export default progressbars;
