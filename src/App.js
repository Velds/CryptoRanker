import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News, Cryptodetails } from './components';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="app">
      <div className="navbar">
       <Navbar />
      </div>
      <div className="main">
        <Layout>
            <Routes>
                <Route exact path="/" element={ <Homepage />} />
                <Route exact path="/cryptocurrencies" element={  <Cryptocurrencies /> } />
                <Route exact path="/crypto/:coinId" element={  <Cryptodetails />} />
                <Route exact path="/news" element={<News />} />
            </Routes>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              CryptoRanker <br />
              All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
