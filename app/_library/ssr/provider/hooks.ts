'use client';
import { useContext } from 'react';
import { DataContext } from '../types';
import { Context } from './context';

export const useData = (): DataContext => useContext(Context);
