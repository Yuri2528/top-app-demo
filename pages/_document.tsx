import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';


class MyDocument extends Document {

	static async getInitialProps(ctc: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctc);
		return { ...initialProps };
	}

	render(): JSX.Element {

		return (

			<Html lang="ru">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>

		);
	}

}

export default MyDocument;