import React from 'react'
import './aboutbrand.scss'
import { Link } from 'react-router-dom'

const AboutBrand = () => {
    let link = '/womazing/Shop'
   
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        changeTheRoute(link)
    }
    return (
        <div className='aboutbrand'>
            <section className="aboutbrand-top aboutbrand-item">
                <div className='aboutbrand-item-img'>
                    <img src="./about-photo-2.png" alt="" />
                </div>
                <div className='aboutbrand-item-text'>
                    <h3>Идея и женщина</h3>
                    <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни  один из членов семьи не является модельером.<br /><br /> Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                </div>
            </section>
            <section className="aboutbrand-bottom aboutbrand-item">
                <div className='aboutbrand-item-text'>
                    <h3>Магия в деталях</h3>
                    <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.<br /><br /> Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.  </p>
                </div>
                <div className='aboutbrand-item-img'>
                    <img src="./about-photo-1.png" alt="" />
                </div>
            </section>
            <Link className='newcollection-btn' onClick={handleClick} to={`/womazing/Shop`}  >Перейти магазин</Link>
        </div>
    )
}

export default AboutBrand