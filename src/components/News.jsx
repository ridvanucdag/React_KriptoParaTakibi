import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import Loader from './Loader';
import { useGetNewsQuery } from '../services/NewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://ridvanucdag.com/assets/img/me.jpg'

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Kripto+para')
    const { data: news } = useGetNewsQuery({ newsCategory, count: simplified ? 9 : 100 })
    const { data } = useGetCryptosQuery(100)

    if (!news?.value) return <Loader />
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className='select-news'
                        placeholder="Kripto Haber Filtre"
                        optionFilterProp='children'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Kripto">Hepsi</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {news.value.map((newData, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={newData.url} target="_blank" rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>
                                    {newData.name > 60
                                        ? `${newData.name.substring(0, 60)} ...`
                                        : newData.name
                                    }
                                </Title>
                                <img style={{ maxWidth: '200px', maxHeight: '100px' }} src={newData?.image?.thumbnail?.contentUrl || demoImage} alt="newData" />
                            </div>
                            <p>
                                {newData.description > 150
                                    ? `${newData.description.substring(0, 150)}...`
                                    : newData.description
                                }
                            </p>
                            <div className='provide-container'>
                                <div>
                                    <Avatar src={newData.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="newData" />
                                    <Text className='provider-name'>{newData.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(newData.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News