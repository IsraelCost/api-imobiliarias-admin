import React, { useState, useContext, useEffect } from "react";

import {
  Container,
  Box,
  BtnClose,
  TitleForm,
  Divisor,
  Form,
  Field,
  Label,
  Input,
  BtnAdd,
  ListImage,
  ItemImage,
  ImageActions,
  BtnDelete,
} from "./styles";

import api from "../../../services/api";

import { Context } from "../../../Context/OptionKeyContext";

import FormError from "../FormError/index";
import ErrorModal from '../ErrorModal/index';
import FormValidator from "../../../services/FormValidator";

export default function ImobiFormModal({ closeModal, idImovel }) {
  const [displayForm, setDisplayForm] = useState(true);
  const [title, ] = useState("Imobiliárias que podem visualizar o Imóvel");
  const [inputValue, setInputValue] = useState("");
  const [imovelImobi, setImovelImobi] = useState([]);
  const [errorsForm, setErrorsForm] = useState([]);
  const ctx = useContext(Context);
  const [errorForModal, setErrorForModal] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const getImobi = async () => {
    try {
      const res = await api.get(
        `/condominios/${chaveCondominio}/imoveis/${idImovel}/imobiliarias`
      );
      setImovelImobi(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (imovelImobi.length === 0) {
      getImobi();
    }

    if (showErrorModal) {
      setErrorForModal('Ops... Ocorreu um erro :/');
      setDisplayForm(false);
    }
  });

  const chaveCondominio = ctx.optionKey;

  function handleCloseForm() {
    closeModal();
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateForm();
  }

  function validateForm() {
    const inputsValues = new Map();
    inputsValues.set("chave_imobi", inputValue);
    const validator = new FormValidator(inputsValues);

    validator.validate();

    if (validator.errors.length > 0) {
      setErrorsForm(validator.errors);
      return;
    }

    postItem();
  }

  const postItem = async () => {
    try {
      await api.post(
        `/condominios/${chaveCondominio}/imoveis/${idImovel}/imobiliarias`,
        { chave_imobi: inputValue }
      );

      setInputValue("");
      setErrorsForm([]);
      getImobi();
    } catch (err) {
      console.error(err);
      setShowErrorModal(true);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await api.delete(`/condominios/${chaveCondominio}/imoveis/${idImovel}/imobiliarias/${itemId}`);
      setInputValue("");
      setErrorsForm([]);
      getImobi();
    } catch (err) {
      console.error(err);
      setShowErrorModal(true);
    }
  };

  const generateErrors = (inputName) => {
    const error =
      errorsForm.length > 0
        ? errorsForm.find((item) => item.nameInput === inputName)
        : null;
    return error ? <FormError content={error.messageError} /> : null;
  };

  function closeErrorModal(value) {
    setErrorForModal('');
    setDisplayForm(true);
    setShowErrorModal(value);
  }

  const InsertErrorModal = () => {
    return errorForModal !== '' ? (
      <ErrorModal errorMessage={ errorForModal } closeModal={ closeErrorModal } />
    ): null;
  };

  return (
    <>
    <Container display={displayForm}>
      <Box>
        <BtnClose onClick={handleCloseForm} />
        <TitleForm>{title}</TitleForm>
        <Divisor />
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="chave_imobi">Chave da Imobiliária</Label>
            <Input
              value={inputValue}
              name="chave_imobi"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <BtnAdd />
            </button>
          </Field>
          {generateErrors("chave_imobi")}
        </Form>
        <ListImage>
          <h4>Imobiliárias já existentes:</h4>
          {imovelImobi.map((imobi) => (
            <ItemImage key={imobi.id}>
              <img src={imobi.url_logo_base_direita_imobi} />
              <ImageActions>
                <BtnDelete onClick={() => deleteItem(imobi.chave_imobi)} />
              </ImageActions>
            </ItemImage>
          ))}
        </ListImage>
      </Box>
    </Container>
    { InsertErrorModal() }
    </>
  );
}
