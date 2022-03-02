import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

const MainPage: React.FC = () => {
    return (
        <div> 
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default MainPage;