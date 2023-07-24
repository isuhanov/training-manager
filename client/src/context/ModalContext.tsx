    import { ReactNode, createContext, useState } from "react";

    /** Интерфейс контекста модального окна */
    interface IModalContext {
        /** Состояние открытия модального окна */
        modal: boolean,
        /** React-компонент, который будет в модальном окне */    
        element: ReactNode,
        /** Функция открытия модального окна */    
        openModal: (element: ReactNode) => void,
        /** Функция закрытия модального окна */    
        closeModal: () => void,
    }

    /** Контекст для работы с модальным окном */
    export const ModalContext = createContext<IModalContext>({
        modal: false,
        element: null,
        openModal: () => {},
        closeModal: () => {},
    });

    /** Компонент для работы с контекстом модального окна */
    export const ModalProvider = ({ children }: { children: ReactNode }) => {
        const [modal, setModal] = useState(false);
        const [element, setElement] = useState<ReactNode>(null);

        const openModal = (element: ReactNode) => {
            setElement(element);
            setModal(true);
        }

        const closeModal = () => {
            setModal(false);
            setElement(null);
        };
        
        return (
            <ModalContext.Provider value={{modal, element, openModal, closeModal}}>
                { children }
            </ModalContext.Provider>
        );
    }