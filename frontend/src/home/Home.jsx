import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook'; // ✅ Import Freebook
import Footer from '../components/Footer';

function Home() {
  return (
      <>
      <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Banner />
              <Freebook /> {/* ✅ Add Freebook here */}
            </main>
            <Footer />
          </div>
      </>
  )
}

export default Home
