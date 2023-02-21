import BackgroundMain from "../../assets/pages/Home/images/main_background.png";
import PhotoMain from "../../assets/pages/Home/images/main_photo.png";
import PhotoAbout from "../../assets/pages/Home/images/about_photo.png";
import BoyNo from "../../assets/pages/Home/images/boy__no.png";
import GirlBomb from "../../assets/pages/Home/images/girl__bomb.png";
import GirlCry from "../../assets/pages/Home/images/girl__cry.png";
import BoyWow from "../../assets/pages/Home/images/boy__wow.png";
import IconPaper from "../../components/UI/IconPaper";
import IconLight from "../../components/UI/IconLight";
import classNames from 'classnames/bind';
import styles from "./Home.module.scss";
import useWindowDimensions from "../../utils/getWindowDimensions";

let cx = classNames.bind(styles);

const Home = () => {
  
    const { width } = useWindowDimensions();
    const itemClassName = cx('mainContent__item', 'mainContent__textItem')

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

    return (
        <div className={styles.wrapper}>
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
                                    <p>и докажи себе, что ты можешь </p>
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
                                      <button>Записаться на занятие</button>
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
                                    <p>Так же как и я</p>
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
           
            <div></div>  
            <div></div>
    
        </div>
    )
}

export default Home;
