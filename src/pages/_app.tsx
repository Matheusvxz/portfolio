// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global/styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ColorModeProvider } from '@/context/ColorMode';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}
