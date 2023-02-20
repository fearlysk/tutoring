import BackgroundMain from "../../assets/pages/Home/images/main_background.png";
import PhotoMain from "../../assets/pages/Home/images/main_photo.png";
import PhotoAbout from "../../assets/pages/Home/images/about_photo.png";
import IconPaper from "../../components/UI/IconPaper";
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
                                <p>7 лет готовлю к ЦТШКЕ</p>
                                <p>на 90 баллов+</p>
                            </div>
                            <div className={styles.triangleBottom}></div>
                        </div>
                   </div>
                   <div className={styles.mainHeadline}>
                        <p>Анна Сластенко</p>
                   </div>
                   <div className={styles.mainHeadline__description}>
                        <p>Онлайн и оффлайн занятия в Беларуси для успешной сдачи ЦТЭШКИ
                        Без  стресса и времени траты на дорогу
                        </p>
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
                                        <p>Сдай ЦТ на высокий балл</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Сдай ЦТ на высокий балл</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Сдай ЦТ на высокий балл</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
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
                                      <button>Записаться на пробное занятие</button>
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
                                        <p>Сдай ЦТ на высокий балл</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Сдай ЦТ на высокий балл</p>
                                    </div>
                                  </div>
                                  <div className={styles.mainContent__itemText}>
                                    <p>и поступи в ВУЗ мечты или престижную школу </p>
                                  </div>
                                </div>
                                <div className={itemClassName}>
                                  <div className={styles.mainContent__itemHeadline}>
                                    <div className={styles.mainContent__itemHeadlineImage}>
                                        <IconPaper />
                                    </div>
                                    <div className={styles.mainContent__itemHeadlineText}>
                                        <p>Сдай ЦТ на высокий балл</p>
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
            <div></div>   
            <div></div>  
            <div></div>
    
        </div>
    )
}

export default Home;
