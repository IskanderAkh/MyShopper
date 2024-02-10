import React, { useEffect, useState } from 'react'
import './Header.scss'
import arrowdown from '../../assets/img/arrowdown.svg'
import photo1 from '../../assets/img/photo1.jpg'
import photo2 from '../../assets/img/photo2.jpg'
import photo3 from '../../assets/img/photo3.jpg'
import { Link } from 'react-router-dom'
const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [colorChange, setColorChange] = useState('black2')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
           
            window.addEventListener('scroll', handleScroll)


            return(()=>{
                window.removeEventListener('scroll', handleScroll)
            })
        }
    }, [])
    return (
        <>
            <div className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className='header-text'>
                    <div className={colorChange == 'black1' ? 'header-text-item headerShow' : 'header-text-item'}>
                        <h1>Свежие тренды<br />в этот период</h1>
                        <p>Утонченные комбинации и нежные оттенки в бархате - именно то, что вы ждали в этот момент. Пора заняться исследованиями.</p>
                    </div>

                    <div className={colorChange == 'black2' ? 'header-text-item headerShow' : 'header-text-item'} >
                        <h1>Новые поступления
                            <br />в этом сезоне</h1>
                        <p>Утонченные сочетания и бархатные <br /> оттенки - вот то, что вы искали в этом<br />  сезоне. Время исследовать.</p>
                    </div>

                    <div className={colorChange == 'black3' ? 'header-text-item headerShow' : 'header-text-item'}>
                        <h1>Новые поступления<br />в этот сезон</h1>
                        <p>Утонченные соединения и бархатистые оттенки - именно то, что вы искали в этот период. Время открывать новые горизонты.</p>
                    </div>
                    <Link  to={'/womazing/Shop'} className='header-text-openshop'><img src={arrowdown} alt="" /><p>Открыть магазин</p></Link>
                    <div className='header-slider'>
                        <button onClick={() => { setColorChange('black1') }} className={colorChange == 'black1' ? 'headerActive' : ''}></button>
                        <button onClick={() => { setColorChange('black2') }} className={colorChange == 'black2' ? 'headerActive' : ''}></button>
                        <button onClick={() => { setColorChange('black3') }} className={colorChange == 'black3' ? 'headerActive' : ''}></button>
                    </div>
                </div>
                <div className='header-img'>


                    <div className='photo1-div'>< img className={'mainPhoto'} src={photo1} alt="" /></div>
                    <div>< img className={'photo2'} src={photo2} alt="" /></div>
                    <div><div className={'photo3-div'}><img className={'photo3'} src={photo3} alt="" /></div></div>
                </div>
            </div>
            <div className='header-img-squire'></div>
        </>
    )
}

export default Header