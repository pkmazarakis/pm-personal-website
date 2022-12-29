import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MainComponent = ({ introEnded, children }: { introEnded: any; children: any }) => {
  const theme = useTheme();

  return (
    <motion.div
      transition={{ duration: 0.85 }}
      initial={false}
      animate={{ y: !introEnded ? window.innerHeight : 0 }}
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        overflowY: 'auto',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      }}
    >
      {children}
    </motion.div>
  );
};
