import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import Loader from './Loader';
import Crypto from './Crypto';
import News from './News'

import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {

    const { data, isFetching } = useGetCryptosQuery(12)
    const globalStats = data?.data?.stats

    if (isFetching) return <Loader />

    return (
        <>
            <Title level={2} className="heading">Kripto Para İstatistikleri</Title>
            <Row style={{ textAlign: 'center' }}>
                <Col span={4}><Statistic title="Toplam Kripto Para Birimi" value={globalStats.total} /></Col>
                <Col span={4}><Statistic title="Toplam Değişim" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={4}><Statistic title="Toplam Piyasa Değeri" value={millify(globalStats.totalMarketCap)} $ /></Col>
                <Col span={4}><Statistic title="Toplam 24 saat Hacim" value={millify(globalStats.total24hVolume)} $ /></Col>
                <Col span={4}><Statistic title="Toplam Piyasa" value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Borsada en çok işlem gören 12 Kripto Para</Title>
                <Title level={3} className='show-more'><Link to="/crypto">Hepsini Göster</Link></Title>
            </div>
            <Crypto simplified />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Kripto Paralar hakkında yeni haberler</Title>
                <Title level={3} className='show-more'><Link to="/news">Daha Fazla haber Göster</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage