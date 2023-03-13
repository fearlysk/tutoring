import { useState } from 'react';
import http from '../../services/http';
import styles from './Modal.module.scss';
import IconPhone from "../../components/UI/icons/IconPhone";
import Cross from '../UI/Modal/Cross/Cross';

const Modal = (props) => {
    const { open, onClose, isSubmitted, setIsSubmitted } = props;

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

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
       }

    if (open) {
        return (
            <div className={styles.modal__background}>
                {!isSubmitted ?    
                <div className={styles.modal__card}>            
                    <div className={styles.modal__header}>
                        <div>
                            <h3>Записаться на занятие</h3>
                        </div>
                        <div className={styles.modal__close} onClick={onClose}>
                            <Cross />
                        </div>
                    </div>
                   
                    <div className={styles.modal__content}>
                        
                        <div className={styles.modal__FormWrapper}>
                            <form onSubmit={(e) => sendMessage(e)} className={styles.modal__form}>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text" 
                                     placeholder="Ваше имя"
                                     value={name}
                                     required
                                     onChange={(e) => setName(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input
                                     className={styles.modal__input} 
                                     type="text" 
                                     placeholder="Номер телефона"
                                     value={phoneNumber}
                                     required
                                     onChange={(e) => setPhoneNumber(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text"
                                     placeholder="Ваше сообщение"
                                     value={message}
                                     required
                                     onChange={(e) => setMessage(e.target.value)} 
                                    />
                                </div>
                                <div className={styles.modal__formBtnWrapper}>
                                    <button type="submit" className={styles.modal__btn}>Записаться</button>
                                </div>
                            </form> 
                        </div>
                        <div className={styles.modal__img}>
                            <IconPhone />
                        </div>
                    </div>
                </div>

                : 
                    
                <div className={styles.modal__card}>            
                 <div className={styles.modal__header}>
                     <div>
                         <h3 className={styles.modal__thanksHeadline}>Спасибо за запись!</h3>
                     </div>
                     <div className={styles.modal__close} onClick={onClose}>
                         <Cross />
                     </div>
                 </div>
                
                 <div className={styles.modal__content}>
                     <div className={styles.modal__contentThanks}>
                        <p>Ваша заявка принята, и я свяжусь с вами в ближайшее время.</p>
                        <p>А пока вы ждете, приглашаю на мою 
                            <a className={styles.modal__contentThanksHighlighted} href="https://www.instagram.com/_an_slastenko_/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">страничку в Instagram!</a>
                        </p>
                        <p>Там очень много полезных материалов как для детей, так и для родителей!</p>
                        <p>Если вам очень срочно нужно связаться со мной, позвоните мне: </p>
                        <p className={styles.modal__contentThanksNumber}>+375 29 897-97-70 </p>
                     </div>
                 </div>
             </div>  
            }
            </div>
        );
    }
};

export default Modal;
