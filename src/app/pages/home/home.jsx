import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/banner/Banner';
import CompetitionListItem from '../../components/competition-list-item';
import Footer from '../../components/footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CompetitionListItem />
      <Footer />
    </div>
  );
};

export default HomePage;
