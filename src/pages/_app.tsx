import type { AppProps } from 'next/app'
import BaseLayout from 'components/BaseLayout'
import GlobalStyle from 'globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		</>
	)
}

export default MyApp
