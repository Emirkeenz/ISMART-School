import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/banner/Banner';
import CompetitionListItem from '../../components/competition-list-item';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CompetitionListItem />
    </div>
  );
};

export default HomePage;
