import {Footer, Layout, Navbar, useTheme} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import {ReactNode} from "react";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const navbar = (
  <Navbar
    logo={<b>UI-Library</b>}
    // ... Your additional navbar options
  />
);
const footer = <Footer>{new Date().getFullYear()} © UI-Library</Footer>

export default async function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
    <Head
      // ... Your additional head options
    >
      {/* Your additional tags should be passed as `children` of `<Head>` element */}
    </Head>
    <body>
    <Layout
      // banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
      footer={footer}
      sidebar={{toggleButton: true, autoCollapse: true}}
      darkMode={true}
      // ... Your additional layout options
    >
      {children}
    </Layout>
    </body>
    </html>
  );
}