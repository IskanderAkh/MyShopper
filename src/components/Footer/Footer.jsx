import React from 'react'
import { useState } from 'react'
import "./footer.scss"
import logo from "../../assets/img/logo.svg"
import { Link, useLocation } from 'react-router-dom'
import instagram from "../../assets/img/instagram.svg"
import facebook from "../../assets/img/facebook.svg"
import twitter from "../../assets/img/twitter.svg"
const Footer = () => {
  const location = useLocation();
  const [selected, setSelected] = useState("/");
  return (
    <div className='footer'>
      <div className="container footer-wrapper">
        <div className='footer-wrapper-left'>
          <div className='footer-wrapper-left-up'>

            <div className="logo footer-wrapper-left-up-logo">
              <img src={logo} alt="" />
              Womazing
            </div>
            <div>
              <ul className="footer-list-wrapper" >
                <li onClick={() => { changeTheRoute("/womazing/"); }}>
                  <Link to={`/womazing/`} className={location.pathname === "/womazing/" ? "selected" : ""} onClick={() => { setSelected("/womazing/"); }}>
                    Главная
                  </Link>
                </li>
                <li
                  onClick={() => { changeTheRoute("/womazing/Shop"); }}>
                  <Link
                    to={`/womazing/Shop`} className={location.pathname === "/womazing/Shop" ? "selected" : ""} onClick={() => { setSelected("/womazing/Shop"); }}>
                    Магазин
                  </Link>
                </li>
                <li
                  onClick={() => { changeTheRoute("/womazing/About"); }}
                >
                  <Link
                    to={`/womazing/About`} className={location.pathname === "/womazing/About" ? "selected" : ""} onClick={() => { setSelected("/womazing/About") }}>  О бренде
                  </Link>
                </li>
                <li onClick={() => { changeTheRoute("/womazing/Contact"); }}>
                  <Link to={`/womazing/Contacts`} className={location.pathname === "/womazing/Contacts" ? "selected" : ""} onClick={() => { setSelected("/womazing/Contacts"); }} >Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-wrapper-left-down'>
            <div className='footer-wrapper-left-down-rights'>
              <p>© Все права защищены <br />
                Политика конфиденциальности <br />
                Публичная оферта</p>
            </div>
            <div className='footer-wrapper-left-down-links'>
              <Link to={'/womazing/shop'}>
                Пальто
              </Link>
              <Link to={'/womazing/shop'}>
                Свитшоты
              </Link>
              <Link to={'/womazing/shop'}>
                Кардиганы
              </Link>
              <Link to={'/womazing/shop'}>
                Толстовки
              </Link>

            </div>
          </div>
        </div>
        <div className='footer-wrapper-right'>
          <div className='footer-wrapper-right-contact'>
            <a href="tel:+998932068844">+7 (495) 823-54-12</a>
            <a href="mailto: hello@womazing.com">hello@womazing.com</a>

          </div>
          <div className='footer-wrapper-right-sm'>
            <a target='_blank' href="https://www.instagram.com/iskander_akh/"><img src={instagram} alt="Instagram" title="All links lead to the Instagram" /></a>
            
            <a target='_blank' href="https://www.instagram.com/iskander_akh/"><img src={facebook} alt="Instagram" title="All links lead to the Instagram" /></a>
            <a target='_blank' href="https://www.instagram.com/iskander_akh/"><img src={twitter} alt="Instagram" title="All links lead to the Instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer