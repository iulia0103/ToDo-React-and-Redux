import {MdStar, MdDoneAll} from 'react-icons/lib/md';
import React from 'react';

const tasks = [
  {
    id: 1,
    taskType: 'todo',
    text: 'read that js book',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 2,
    taskType: 'todo',
    text: 'make another react+redux tutorial',
    completed: true,
    symbol: <MdDoneAll />
  },
  {
    id: 3,
    taskType: 'todo',
    text: 'go to the monthly training',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 4,
    taskType: 'todo',
    text: 'apply to 5 jobs',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 5,
    taskType: 'todo',
    text: 'buy plane tickets',
    completed: true,
    symbol: <MdDoneAll />
  },
  {
    id: 6,
    taskType: 'weekly',
    text: 'go to gym twice per week',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 7,
    taskType: 'weekly',
    text: 'take a walk in the park',
    completed: true,
    symbol: <MdDoneAll />
  },
  {
    id: 8,
    taskType: 'weekly',
    text: 'go to the swimming pool',
    completed: true,
    symbol: <MdDoneAll />
  },
  {
    id: 9,
    taskType: 'weekly',
    text: 'call at home',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 10,
    taskType: 'weekly',
    text: 'clean the house',
    completed: true,
    symbol: <MdStar />
  },
  {
    id: 11,
    taskType: 'weekly',
    text: 'go to the local market',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 12,
    taskType: 'daily',
    text: 'walk 30 minutes',
    completed: false,
    symbol: <MdStar />
  },
  {
    id: 13,
    taskType: 'daily',
    text: 'code for a few hours',
    completed: true,
    symbol: <MdDoneAll />
  }
];

export default tasks;
