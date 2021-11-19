/* eslint-disable no-lone-blocks */
import React from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom";
import * as S from "./styled-modal";

/* import { ReactComponent as ModalClose } from '../../assets/icons/ModalClose.svg'; */
import { colors } from "../../assets/colors";

{
  /* 
	modal usage example
		const [visible, setVisible] = useState(false);
		return (
	<Modal
					open={visible}
					onClickOutside
					buttonType1="secondary"
					buttonType2="primary"
					title="Contratante editado com sucesso!"
					textButton1="Ver contratantes"
					textButton2="Criar contratante"
					onClose={() => setVisible(false)}
					onClickButton1="/transactions"
					onClickButton2="/resumo"
				/>) */
}

const Modal = (props) => {
  const {
    onClickOutside,
    open,
    onClose,
    title,
    textButton1,
    textButton2,
    onClickButton1,
    onClickButton2,
    buttonType1,
    buttonType2,
  } = props;

  const history = useHistory();

  function handleRedirect(url) {
    history.push(url);
  }

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <S.Overlay onClick={onClickOutside ? onClose : null} />
      <S.Modal>
        <S.ButtonClose type="button" onClick={onClose}>
          <span width="10px" height="10px" style={{ display: "block" }}>
            X
          </span>
        </S.ButtonClose>
        <S.Title>{title}</S.Title>
        <S.ButtonGroup>
          {textButton1 && (
            <S.Button
              textColor={
                buttonType1 === "primary" ? colors.purple : colors.lightPurple
              }
              backgroundColor={buttonType1 === "primary" && colors.offWhite}
              onClick={() => handleRedirect(onClickButton1)}
            >
              <S.ButtonText>{textButton1}</S.ButtonText>
            </S.Button>
          )}
          {textButton2 && (
            <S.Button
              textColor={
                buttonType2 === "primary" ? colors.purple : colors.purple
              }
              backgroundColor={
                buttonType2 === "primary" ? colors.offWhite : "none"
              }
              buttonType={buttonType2}
              onClick={() => {
                handleRedirect(onClickButton2);
              }}
            >
              <S.ButtonText>{textButton2}</S.ButtonText>
            </S.Button>
          )}
        </S.ButtonGroup>
      </S.Modal>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
