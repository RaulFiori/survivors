import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import { Main, PageContainer } from './styles'
import Header from 'components/Header'

const BaseLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Survivors</title>
				<meta
					name='description'
					content='Leaning project for a challenge by Raul Fiori'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main>
				<Header />
				<PageContainer>{children}</PageContainer>
			</Main>
		</>
	)
}

export default BaseLayout
