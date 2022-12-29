import { useContext } from 'react';
import { HotkeyContext, ThemeContext } from './contexts';

export const useHotkey = () => useContext(HotkeyContext);

export const useTheme = () => useContext(ThemeContext);
