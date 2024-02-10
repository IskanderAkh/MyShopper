import React from 'react'
import './contactcomp.scss'


const ContactComp = () => {
    return (
        <div className='contactcomp'>
            <div className='contactcomp-map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23971.505278104596!2d69.27461531463217!3d41.32108465209151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e64d72f551%3A0xb03bdd825e1550c3!2sKanishka_dsgn!5e0!3m2!1sru!2s!4v1707046655261!5m2!1sru!2s"


                    style={{ border: "0", width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>

            <div className='contactcomp-info'>
                <div>
                    <h4>Телефон</h4>
                    <a href="tel:+998932068844">+998(93)2068844</a>
                </div>
                <div>
                    <h4>E-mail</h4>
                    <a href="email">info@sitename.com</a>
                </div>
                <div>
                    <h4>Адрес</h4>
                    <p>улица Оккурган 21, Ташкент, Toshkent Shahri, Узбекистан</p>
                </div>
            </div>
        </div>
    )
}

export default ContactComp