import { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './style.module.scss';
import IconPhone from "../../components/UI/icons/IconPhone";

const modalRootElement = document.querySelector('#modal');

const Modal = (props) => {
    const { marker, open, onClose } = props;
    const element = useMemo(() => {
        const element = document.createElement('div')
        element.dataset.marker = marker
        return element
  }, [marker]);

    useEffect(() => {
        modalRootElement.appendChild(element);
        
        return () => {
            modalRootElement.removeChild(element);
        };
    });

    if (open) {
        return createPortal(
            <div className={style.modal__background} >
                <div className={style.modal__card}>{props.children}
                    <div className={style.modal__header}>
                        <h3>Записаться на занятие</h3>
                    </div>
                    <div className={style.modal__close} onClick={onClose}>Close</div>
                    <div className={style.modal__content}>
                        <div className={style.modal__FormWrapper}>
                            <form className={style.modal__form}>
                                <div className={style.modal__formInputWrapper}>
                                    <input className={style.modal__input} type="text" placeholder="Ваше имя"/>
                                </div>
                                <div className={style.modal__formInputWrapper}>
                                    <input className={style.modal__input} type="text" placeholder="Номер телефона"/>
                                </div>
                                <div className={style.modal__formInputWrapper}>
                                    <input className={style.modal__input} type="text" placeholder="Ваш класс"/>
                                </div>
                                <div className={style.modal__formBtnWrapper}>
                                    <button className={style.modal__btn}>Записаться</button>
                                </div>
                            </form> 
                        </div>
                        <div className={style.modal__img}>
                            <IconPhone />
                        </div>
                    </div>
                </div>
            </div>,
            element
        );
    }

    return null;
};

export default Modal;
