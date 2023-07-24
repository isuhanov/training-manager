import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

/** Хук для работы с контекстом модального окна */
export const useModal = () => useContext(ModalContext);