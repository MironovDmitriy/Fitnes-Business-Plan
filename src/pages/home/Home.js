import React from 'react';
import styled from 'styled-components';

import Footer from 'proj/components/footer';
import DataInput from 'proj/components/dataInput';
import Header from 'proj/components/header';

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: [one] 20vh [two] 70vh [three] 10vh [four];
	grid-template-columns: [one] 100vw [two];
`

const Home = () => {
	return (
		<Wrapper>
			<Footer />
			<DataInput />
			<Header />
		</Wrapper>
	);
};

export default Home;