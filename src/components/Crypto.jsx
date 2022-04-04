import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'
import Loader from './Loader'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Crypto = ({ simplified }) => {
    const count = simplified ? 12 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        setCryptos(cryptoList?.data?.coins)
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))
        setCryptos(filterData)
    }, [cryptoList, search])

    if (isFetching) return <Loader />
    return (

        <>
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Kripto Para Ara..' onChange={(e) => setSearch(e.target.value)} />
                </div>
            )}

            <Row gutters={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link key={currency.uuid} to={`/cryptoss/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} alt="alt" />}
                                hoverable
                            >
                                <p>Borsa İşlem Fiyatı : {millify(currency.price)} $ </p>
                                <p>Piyasa Değeri : {millify(currency.marketCap)} $ </p>
                                <p>Günlük Değişim : {millify(currency.change)}%  </p>

                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Crypto