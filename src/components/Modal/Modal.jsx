import { useState } from 'react';
import http from '../../services/http';
import styles from './Modal.module.scss';
import IconPhone from "../../components/UI/icons/IconPhone";
import Cross from '../UI/Modal/Cross/Cross';

const Modal = (props) => {
    const { open, onClose } = props;

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
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=1198808944&text=${text}`;
        http(url, "GET");
        setName('');
        setPhoneNumber('');
        setMessage('');
       }

    if (open) {
        return (
            <div className={styles.modal__background} >
                <div className={styles.modal__card}>{props.children}
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
                            <form className={styles.modal__form}>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text" 
                                     placeholder="Ваше имя"
                                     value={name}
                                     onChange={(e) => setName(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input
                                     className={styles.modal__input} 
                                     type="text" 
                                     placeholder="Номер телефона"
                                     value={phoneNumber}
                                     onChange={(e) => setPhoneNumber(e.target.value)} 
                                     />
                                </div>
                                <div className={styles.modal__formInputWrapper}>
                                    <input 
                                     className={styles.modal__input} 
                                     type="text"
                                     placeholder="Ваше сообщение"
                                     value={message}
                                     onChange={(e) => setMessage(e.target.value)} 
                                    />
                                </div>
                                <div className={styles.modal__formBtnWrapper}>
                                    <button onClick={(e) => sendMessage(e)} className={styles.modal__btn}>Записаться</button>
                                </div>
                            </form> 
                        </div>
                        <div className={styles.modal__img}>
                            <IconPhone />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;
