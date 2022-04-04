import React from 'react'
import { Menu, Typography } from 'antd'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Typography.Title level={3} className="logo">
                    <Link to="/">Rıdvan Üçdağ</Link>
                </Typography.Title>

                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5']} style={{ position: 'fixed', zIndex: 1, width: '70%', marginLeft: 330, fontSize: 25 }}>
                    <Menu.Item key="1">
                        <Link to="/">Ana Sayfa</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/crypto">Bütün Kripto Paralar</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/news">Güncel Kripto Para Haberleri</Link>
                    </Menu.Item>
                </Menu>

            </div>
        </div>
    )
}

export default Navbar