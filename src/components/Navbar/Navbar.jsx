import React, { useContext, useState, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import cart from "../../assets/img/cart.svg";
import phone from "../../assets/img/phone.svg";
import { ShopContext } from "../../ShopContext";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import arrow_down from "../../assets/img/arrowdownbutton.svg";
import burger_menu from "../../assets/img/burger-menu.svg";
import closemodalbtn from "../../assets/img/cart_cross_icon.png"

const Navbar = () => {
  const { changeTheRoute, getTotalCartItems } = useContext(ShopContext);
  const [selected, setSelected] = useState("/");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [over, setOver] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const [dataContactSent, setContactSent] = useState(false)
  const [currentWindowLocation, setCurrentWindowLocation] = useState(0)
  const [contact, setContact] = useState({
    name: '',
    email: '',
    tel: ''
  })

  const handleResetModal = () => {
    setOpenModal(false)
    setContactSent(false)
    closeModalFunction()
  }
  const openModalFunction = () => {
    let location = window.scrollY;
    setCurrentWindowLocation(location);
    setOpenModal(true);

    setTimeout(() => {
      document.body.style.overflow = "hidden";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 150);
  };

  const closeModalFunction = () => {
    window.scrollTo({
      top: currentWindowLocation,
      behavior: "smooth",
    });
    document.body.style.overflow = 'visible';
    setOpenModal(false);
  };

  const handleInputChange = (e, setData) => {
    const { name, value } = e.target
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleCallButtonClick = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const alreadyCalled = sessionStorage.getItem('called')
    if (alreadyCalled) {
      alert('Вы уже заказли обратный звонок, попробуйте позже')
      return;
    }

    if (!contact.name || !contact.email || !contact.tel) {
      alert('Please provide all customer information.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
      localStorage.setItem('problem', contact.email);
      alert('Please enter a valid email address.');
      return;
    }
    sessionStorage.setItem('called', true)
    setContactSent(true);
    // Additional logic if needed
  };

  // ...

  <button onClick={(e) => handleCallButtonClick(e)}>Заказать звонок</button>



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);



    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])



  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-wrapper container">
          <Link to={'/womazing/'} className="navbar-logo">
            <img src={logo} alt="" />
            <h3>Womazing</h3>
          </Link>
          <div className={open === true ? `navbar-list open` : 'navbar-list'}>
            <ul className="navbar-list-wrapper" >
              <li
                onClick={() => {
                  changeTheRoute("/womazing/");
                  setOpen(false)
                }}
              >
                <Link
                  to={`/womazing/`}
                  className={location.pathname === "/womazing/" ? "selected" : ""}
                  onClick={() => {
                    setSelected("/womazing/");
                  }}
                >
                  Главная
                </Link>
              </li>
              <li
                onClick={() => {
                  changeTheRoute("/womazing/Shop");
                  setOpen(false)
                }}
              >
                <Link
                  to={`/womazing/Shop`}
                  className={
                    location.pathname === "/womazing/Shop" ? "selected" : ""
                  }
                  onClick={() => {
                    setSelected("/womazing/Shop");

                  }}
                >
                  Магазин
                </Link>
              </li>
              <li
                onClick={() => {
                  changeTheRoute("/womazing/About");
                  setOpen(false)
                }}
              >
                <Link
                  to={`/womazing/About`}
                  className={
                    location.pathname === "/womazing/About" ? "selected" : ""
                  }
                  onClick={() => {
                    setSelected("/womazing/About");

                  }}>  О бренде </Link>
              </li>
              <li onClick={() => { changeTheRoute("/womazing/Contact"); setOpen(false) }}>
                <Link to={`/womazing/Contacts`} className={location.pathname === "/womazing/Contacts" ? "selected" : ""} onClick={() => { setSelected("/womazing/Contacts"); }} >Контакты</Link>
              </li>
            </ul>
            <div className="navbar-cart">
              <button onClick={() => {
                openModalFunction()
                setOpen(false)
              }
              } onMouseOver={() => setOver(true)} onMouseLeave={() => setOver(false)} className="navbar-cart-tel">
                <img src={phone} className={over ? 'mouseIsOver' : ''} alt="" /> +7 (495) 823-54-12
              </button>
              <Link to={'/womazing/cart'} onClick={()=>setOpen(false)}>
                <img src={cart} alt="" className="navbar-cart-svg" /> <span>{getTotalCartItems() === 0 ? '' : getTotalCartItems()}</span>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="burger-menu-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={burger_menu} alt="" />
        </button>
      </div>
      {openModal && (
        <div className="modal">
          {!dataContactSent && (
            <div className="modal-wrapper">
              <button onClick={() => closeModalFunction()} className="modal-wrapper-closebtn">
                <img src={closemodalbtn} alt="" />
              </button>
              <form action="" className="modal-wrapper-form">
                <h3>Заказать обратный звонок</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={contact.name}
                  onChange={(e) => handleInputChange(e, setContact)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={contact.email}
                  onChange={(e) => handleInputChange(e, setContact)}
                />
                <input
                  type="tel"
                  name="tel"
                  placeholder="Телефон"
                  value={contact.tel}
                  onChange={(e) => handleInputChange(e, setContact)}
                />
                <button onClick={(e) => handleCallButtonClick(e)}>Заказать звонок</button>

              </form>
            </div>
          )
          }

          {dataContactSent && (
            <div className="modal-success">
              <h3>Отлично! Мы скоро вам перезвоним.</h3>
              <button onClick={() => handleResetModal()}>Закрыть</button>
            </div>
          )
          }
        </div>
      )}

    </>
  );
};

export default Navbar;
