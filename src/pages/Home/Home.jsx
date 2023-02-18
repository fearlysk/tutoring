import BackgroundMain from "../../assets/pages/Home/main_background.png";
import PhotoMain from "../../assets/pages/Home/main_photo.png";
import IconPaper from "../../components/UI/IconPaper";
import styles from "./Home.module.scss";

const Home = () => {
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
                        <p>Онлайн и оффлайн занятия в Беларуси для успешной сдачи ЦТ
                        Без  стресса и времени траты на дорогу
                        </p>
                   </div>
                   <div className={styles.mainContent}>
                        <div className={styles.mainContent__headline}>
                            <p>РЕПЕТИТОР ПО МАТЕМАТИКЕ</p>
                        </div>
                        <div className={styles.mainContent__items}>
                            <div className={styles.mainContent__itemWrapper}>
                                <div className={styles.mainContent__item}>
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
                                <div className={styles.mainContent__item}>
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
                                <div className={styles.mainContent__item}>
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
                                <img className={styles.mainContent__itemPhoto} width={350} src={PhotoMain} alt="No img found" />
                            </div>
                            <div className={styles.mainContent__itemWrapper}>
                                <div className={styles.mainContent__item}>
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
                                <div className={styles.mainContent__item}>
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
                                <div className={styles.mainContent__item}>
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

                   <div className={styles.mainContent__btnWrapper}>
                        <div className={styles.mainContent__btnLabel}>
                           <p>БЕСПЛАТНО</p>
                        </div>
                        <div className={styles.mainContent__btn}>
                            <button>Записаться на пробное занятие</button>
                        </div>
                   </div>

                </div>
            </div>
               
           
           
           
            <div></div>  
            <div></div>   
            <div></div>  
            <div></div>
    
        </div>
    )
}

export default Home;
