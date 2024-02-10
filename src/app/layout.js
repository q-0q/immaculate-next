import "./stylesheets/main.css";
import "./global.css";

import Menu from './components/menu'

export const metadata = {
  title: "Immaculate Conception",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: '0'}}>
        <Menu></Menu>

        {children}</body>
    </html>
  );
}
