// src/components/layouts/DashboardLayout/DashboardLayout.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout as ToolpadLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import TranslateIcon from '@mui/icons-material/Translate';
import { createTheme } from '@mui/material/styles';

// Import your pages
import Dashboard from '../../modules/dashboard/Dashboard';
import TextToImage from '../../modules/textToImage/TextToImage';
import VoiceToText from '../../modules/voiceToText/VoiceToText';
import TextTranslation from '../../modules/textTranslation/TextTranslation';

const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
  { segment: 'text-to-image', title: 'Text to Image', icon: <ImageIcon /> },
  { segment: 'voice-to-text', title: 'Voice to Text', icon: <KeyboardVoiceIcon /> },
  { segment: 'text-translation', title: 'Text Translation', icon: <TranslateIcon /> },
];

const demoTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-toolpad-color-scheme' },
  colorSchemes: { light: true, dark: true },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});

const getPageComponent = (pathname) => {
  switch (pathname) {
    case '/dashboard':
      return <Dashboard />;
    case '/text-to-image':
      return <TextToImage />;
    case '/voice-to-text':
      return <VoiceToText />;
    case '/text-translation':
      return <TextTranslation />;
    default:
      return <Dashboard />;
  }
};

function DashboardLayout({ window }) {
  const router = useDemoRouter('/dashboard');
  const demoWindow = window !== undefined ? window() : undefined;
  const CurrentComponent = getPageComponent(router.pathname);

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme} window={demoWindow}>
      <ToolpadLayout>{CurrentComponent}</ToolpadLayout>
    </AppProvider>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
