import { useState } from "react";
import BackgroundMain from "../../assets/pages/Home/images/main_background.png";
import BackgroundReviews from "../../assets/pages/Home/images/reviews_background.png";
import PhotoMain from "../../assets/pages/Home/images/main_photo.png";
import PhotoAbout from "../../assets/pages/Home/images/about_photo.png";
import BoyNo from "../../assets/pages/Home/images/boy__no.png";
import GirlBomb from "../../assets/pages/Home/images/girl__bomb.png";
import GirlCry from "../../assets/pages/Home/images/girl__cry.png";
import BoyWow from "../../assets/pages/Home/images/boy__wow.png";
import Cursor from "../../assets/pages/Home/images/cursor.png";
import Magnifier from "../../assets/pages/Home/images/magnifier.png";
import PhoneOne from "../../assets/pages/Home/images/reviews_phone1.png";
import PhoneTwo from "../../assets/pages/Home/images/reviews_phone2.png";
import PhoneThree from "../../assets/pages/Home/images/reviews_phone3.png";
import PhoneFour from "../../assets/pages/Home/images/reviews_phone4.png";
import PhoneFive from "../../assets/pages/Home/images/reviews_phone5.png";
import IconPaper from "../../components/UI/icons/IconPaper";
import IconLight from "../../components/UI/icons/IconLight";
import IconTeacher from "../../components/UI/icons/IconTeacher";
import IconMath from "../../components/UI/icons/IconMath";
import IconStudy from "../../components/UI/icons/IconStudy";
import classNames from 'classnames/bind';
import styles from "./Home.module.scss";
import http from "../../services/http";
import useWindowDimensions from "../../utils/getWindowDimensions";
import IconDream from "../../components/UI/icons/IconDream";
import { Carousel } from "../../components/Slider/Carousel";
import IconContact from "../../components/UI/icons/IconContact";
import Modal from "../../components/Modal/Modal";

let cx = classNames.bind(styles);

const Home = () => {
  
    const { width } = useWindowDimensions();
    const itemClassName = cx('mainContent__item', 'mainContent__textItem');
    const resultItemClassName = cx('result__leftItem', 'result__leftItemRightSide');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const token = process.env.REACT_APP_TOKEN;

    const sendMessage = (e) => {
     e.preventDefault();
     const text = `
      Имя: ${name}                                                                                                                                                      
      Телефон: ${phoneNumber}                                                                                                                                                       
      Сообщение: ${message}
    `
     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-935795902&text=${text}`;
     http(url, "GET");
     setName('');
     setPhoneNumber('');
     setMessage('');
     setIsSubmitted(true);
     setOpen(true);
    }

    const closeModal = () => {
      setOpen(false);
      setIsSubmitted(false);
    }

    const setSubmitted = () => {
      setIsSubmitted(true);
    }

    const resizeImage = () => {
      let imgSize;
      if (width > 370) {
        imgSize = 350;
      } else if (width > 320) {
        imgSize = 310;
      } else {
        imgSize = 280;
      }
      return imgSize;
    }

    let slides = [
      <img width={280} src={PhoneOne} alt="1" />,
      <img width={280} src={PhoneTwo} alt="2" />,
      <img width={280} src={PhoneThree} alt="3" />,
      <img width={280} src={PhoneFour} alt="4" />,
      <img width={280} src={PhoneFive} alt="5" />
    ]

    return (
        <div className={styles.wrapper}>
            <Modal open={open} onClose={closeModal} isSubmitted={isSubmitted} setIsSubmitted={setSubmitted} />
            <div className={styles.main} style={{background: `url(${BackgroundMain})`}}>
                <div className={styles.main__container}>
                   <div className={styles.main__header}>
                        <div className={styles.mainHeader__container}>
                            <div className={styles.mainHeader__experience}>
                                <p>7 лет готовлю к ЦТ</p>
                                <p>на 90 баллов+</p>
                            </div>
                            <div className={styles.triangleBottom}></div>
                        </div>
                   </div>
                   <div className={styles.mainHeadline}>
                        <p>Анна Сластенко</p>
                   </div>
                   <div className={styles.mainHeadline__description}>
                        <p>Оффлайн занятия в Минске для успешной сдачи экзаменов, самостоятельных и контрольных работ</p>
                   </div>
                   <div className={styles.mainContent}>
                        <div className={styles.mainContent__headline}>
                            <p>РЕПЕТИТОР ПО МАТЕМАТИКЕ</p>
                        </div>
                        <div className={styles.mainContent__items}>
                            <div className={styles.mainContent__itemWrapper}>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Сдай хорошо свой первый экзамен</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>без стресса и волнений</p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Стань уверенне на уроках</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и докажи себе, что ты можешь</p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Комфортные занятия с чаем и конфетками</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>Важно заинтересовать ребёнка, чтобы он с радостью шёл на занятия</p>
                                  </div>
                                </div>
                            </div>
                            <div className={styles.mainContent__item}>
                                <img className={styles.mainContent__itemPhoto} width={resizeImage()} src={PhotoMain} alt="No img found" />
                                <div className={styles.mainContent__btnWrapper}>
                                  <div className={styles.mainContent__btnLabel}>
                                     <p>БЕСПЛАТНО</p>
                                  </div>
                                  <div className={styles.mainContent__btn}>
                                      <button onClick={() => setOpen(true)}>Записаться на занятие</button>
                                  </div>
                                </div>
                            </div>
                            <div className={styles.mainContent__itemWrapper}>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Полюби математику</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>Так же, как и я</p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Подружись с Пифагором и Виетом</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>Все сложные задачки станут для тебя элементарными</p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                      <p>Развивай логику и мышление</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
                                  </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
               
            <div className={styles.about}>
              <div className={styles.about__content}>
                <div className={styles.about__contentItem}>
                  <h1>КТО Я?</h1>
                </div>
                <div className={styles.about__contentItem}>
                  <p>
                    Привет! Меня зовут Сластенко Анна
                    я преподаю математику для детей 1-9 класса.
                  </p>
                </div>
                <div className={styles.about__contentItem}>
                  <p>
                    Получаю высшее педагогическое образование в БГУ. 
                    Закончила Гимназию с золотой медалью, позже была зачислена на бюджет в лучший ВУЗ страны.
                  </p>
                </div>
              </div>
              <div className={styles.about__photo}>
                <img src={PhotoAbout} alt="No img found" />
              </div>
            </div>  

            <div className={styles.situations}>
              <div className={styles.situations__content}>
                <div className={styles.situations__header}>
                    <div className={styles.situations__icon}>
                        <IconLight />
                    </div>
                    <h2>Записывайся ко мне на занятия, если</h2>
                </div>
                <div className={styles.situations__items}>
                  <div className={styles.situations__item}>
                     <div className={styles.situations__photo}>
                         <img src={GirlBomb} alt="No img found" />
                     </div>
                     <div className={styles.situations__text}>
                         <p>Считаешь, что математика - не твоё</p>
                     </div>
                  </div>
                  <div className={styles.situations__item}>
                     <div className={styles.situations__photo}>
                         <img className={styles.situations__girlCry} src={GirlCry} alt="No img found" />
                     </div>
                     <div className={styles.situations__text}>
                         <p>Путаешься в дискриминанте и теореме Виета</p>
                     </div>
                  </div>
                  <div className={styles.situations__item}>
                     <div className={styles.situations__photo}>
                         <img className={styles.situations__boyWow} src={BoyWow} alt="No img found" />
                     </div>
                     <div className={styles.situations__text}>
                         <p>Ты не знаешь, как легко считать площади</p>
                     </div>
                  </div>
                  <div className={styles.situations__item}>
                     <div className={styles.situations__photo}>
                         <img src={BoyNo} alt="No img found" />
                     </div>
                     <div className={styles.situations__text}>
                         <p>Ты не умеешь складывать числа</p>
                     </div>
                  </div>
                </div>
              </div>

            </div>  
                <div className={styles.results}>
                    <div className={styles.results__content}>
                      <div className={styles.results__header}>
                        <div className={styles.results__headerIcon}><IconLight /></div>
                        <div className={styles.results__headerText}><h2>Что тебя ждёт после обучения со мной?</h2></div>
                      </div>
                      <div className={styles.results__main}>
                        <div className={styles.result__left}>
                          <div className={styles.result__leftContent}>
                             <div className={styles.result__leftItem}>
                                  <span>01</span>
                                  <h3>Повышение успеваемости</h3>
                                  <p>
                                    я смогу тебя заинтересовать, математика - это не куча занудных формул, а интересные ассоциации с понятыми для тебя вещами
                                  </p>
                             </div>
                             <div className={styles.result__leftItem}>
                                  <span>02</span>
                                  <h3>Повышение успеваемости</h3>
                                  <p>
                                    контрольные и самостоятельные работы больше не будут тебя пугать,ты все сможешь сдать самостоятельно на хороший балл
                                  </p>
                             </div>
                          </div>
                        </div>
                        <div className={styles.resultIcon}>
                          <IconTeacher />
                        </div>
                        <div className={styles.result__left}>
                          <div className={styles.result__leftContent}>
                             <div className={resultItemClassName}>
                                  <span>03</span>
                                  <h3>Повышение успеваемости</h3>
                                  <p>
                                    ты будешь уверенно себя чувствовать на занятиях, одноклассники будут просить объяснить домашку
                                  </p>
                             </div>
                             <div className={resultItemClassName}>
                                  <span>04</span>
                                  <h3>Повышение успеваемости</h3>
                                  <p>
                                    ты полюбишь математику и наконец-то сможешь определиться с профессией
                                  </p>
                             </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.results__button}> 
                          <button onClick={() => setOpen(true)}>Хочу на занятия!</button>  
                          <div className={styles.results__cursor}>
                            <img src={Cursor} width='100px' alt="No img found" />
                          </div>
                      </div>
                    </div>
                </div>
              
            <div className={styles.method}>
                <div className={styles.method__content}>
                    <div className={styles.method__header}>
                      <div className={styles.method__headerIcon}><IconLight /></div>
                      <div className={styles.method__headerText}><h2>Занятия построены по личной методике</h2></div>
                    </div>
                    <div className={styles.method__items}>
                      <div className={styles.method__item}>
                      <div className={styles.method__itemNumber}><p>01</p></div>
                      <div className={styles.method__itemContent}>
                        <p className={styles.method__itemContentHeader}>Развитие самостоятельности и уверенности в своих силах</p>
                        <p className={styles.method__itemContentDescr}>Любое вступительное или выпускное испытание ребёнок будет сдавать сам. Ни меня, ни учителя рядом не будет.</p>
                        <p className={styles.method__itemContentBottom}>Ребёнку нужна уверенность в своих силах, что он сам сможет что-то решить.</p>
                      </div> 
                      <div className={styles.method__itemImage}>
                        <IconMath />
                      </div>
                      </div>
                      <div className={styles.method__item}>
                        <div className={styles.method__itemNumber}><p>02</p></div>
                        <div className={styles.method__itemContent}>
                           <p className={styles.method__itemContentHeader}>Развитие самостоятельности и уверенности в своих силах</p>
                           <p className={styles.method__itemContentDescr}>Любое вступительное или выпускное испытание ребёнок будет сдавать сам. Ни меня, ни учителя рядом не будет.</p>
                           <p className={styles.method__itemContentBottom}>Ребёнку нужна уверенность в своих силах, что он сам сможет что-то решить.</p>
                        </div>
                        <div className={styles.method__itemImage}>
                          <IconStudy />
                        </div>
                      </div>
                      <div className={styles.method__item}>
                        <div className={styles.method__itemNumber}><p>03</p></div>
                        <div className={styles.method__itemContent}>
                          <p className={styles.method__itemContentHeader}>Развитие самостоятельности и уверенности в своих силах</p>
                          <p className={styles.method__itemContentDescr}>Любое вступительное или выпускное испытание ребёнок будет сдавать сам. Ни меня, ни учителя рядом не будет.</p>
                          <p className={styles.method__itemContentBottom}>Ребёнку нужна уверенность в своих силах, что он сам сможет что-то решить.</p>
                        </div> 
                        <div className={styles.method__itemImage}>
                          <IconDream />
                        </div>
                      </div>
                    </div>
                </div>
            </div>

          <div className={styles.reviews} style={{background: `url(${BackgroundReviews})`}}>
            <div className={styles.reviews__content}>
              <div className={styles.reviews__headline}>
                <div className={styles.reviews__headlineIcon}>
                  <IconLight />
                </div>
                <div className={styles.reviews__headlineText}>
                  <p>Отзывы родителей и учеников</p>
                </div>
                <div className={styles.reviews__headlineMagnifier}>
                  <img src={Magnifier} width={220} alt="No img found" />
                </div>
              </div>
              <div className={styles.reviews__items}>
                <Carousel slides={slides} autoplay={true} interval={3000} />
              </div>
            </div>
          </div>

          <div className={styles.application}>
            <div className={styles.application__content}>
              <div className={styles.application__headline}>
                <div className={styles.application__headlineIcon}>
                  <IconLight />
                  </div>
                <div className={styles.application__headlineText}>
                  <p>Оставьте заявку, и я обязательно с вами свяжусь!</p>
                </div>
              </div>
              <div className={styles.application__items}>
                <div className={styles.application__item}>
                  <IconContact />
                </div>
                <div className={styles.application__item}>
                    <form onSubmit={(e) => sendMessage(e)} className={styles.application__itemForm}>
                      <div className={styles.application__itemFormInputWrapper}>
                        <input 
                          className={styles.application__itemFormInput}
                          type="text"
                          required
                          placeholder="Ваше имя"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className={styles.application__itemFormInputWrapper}>
                        <input
                          className={styles.application__itemFormInput}
                          type="number"
                          required
                          placeholder="Ваш телефон"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className={styles.application__itemFormInputWrapper}>
                        <textarea
                          className={styles.application__itemFormTextarea}
                          placeholder="Ваше сообщение"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      <div className={styles.application__itemFormBtnWrapper}>
                        <button type="submit" className={styles.application__itemFormBtn}>Записаться</button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Home;
