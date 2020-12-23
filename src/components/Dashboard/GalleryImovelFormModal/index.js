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
  BtnEdit,
  BtnDelete,
} from "./styles";

import api from "../../../services/api";

import { Context } from "../../../Context/OptionKeyContext";

import FormError from "../FormError/index";
import ErrorModal from '../ErrorModal/index';
import FormValidator from "../../../services/FormValidator";

export default function GalleryImovelFormModal({ closeModal, idImovel }) {
  const [displayForm, setDisplayForm] = useState(true);
  const [title, ] = useState("Imagens do Imóvel");
  const [inputValue, setInputValue] = useState("");
  const [imovelImages, setImovelImages] = useState([]);
  const [method, setMethod] = useState("post");
  const [errorsForm, setErrorsForm] = useState([]);
  const ctx = useContext(Context);
  const [imageId, setImageId] = useState('');
  const [errorForModal, setErrorForModal] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  const getImages = async () => {
    try {
      const res = await api.get(
        `/condominios/${chaveCondominio}/imoveis/${idImovel}/imagens`
      );
      setImovelImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (imovelImages.length === 0) {
      getImages();
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
    inputsValues.set("url_image", inputValue);
    const validator = new FormValidator(inputsValues);

    validator.validate();

    if (validator.errors.length > 0) {
      setErrorsForm(validator.errors);
      return;
    }

    postOrUpdateItem();
  }

  const postOrUpdateItem = async () => {
    try {
      if (method === "post") {
        await api.post(
          `/condominios/${chaveCondominio}/imoveis/${idImovel}/imagens`,
          { url_image: inputValue }
        );
      } else if (method === "update") {
        await api.put(
          `/condominios/${chaveCondominio}/imoveis/${idImovel}/imagens/${imageId}`,
          { url_image: inputValue }
        );
      }

      setInputValue("");
      setErrorsForm([]);
      getImages();
      setMethod('post');
    } catch (err) {
      console.error(err);
      setShowErrorModal(true);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await api.delete(`/condominios/${chaveCondominio}/imoveis/${idImovel}/imagens/${itemId}`);
      setInputValue("");
      setErrorsForm([]);
      getImages();
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

  const handleClickOnEdit = (imageUrl, imageId) => {
    setInputValue(imageUrl);
    setMethod('update');
    setImageId(imageId);
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
            <Label htmlFor="url_image">URL da imagem:</Label>
            <Input
              value={inputValue}
              name="url_image"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
              <BtnAdd />
            </button>
          </Field>
          {generateErrors("url_image")}
        </Form>
        <ListImage>
          <h4>Imagens já existentes:</h4>
          {imovelImages.map((image) => (
            <ItemImage key={image.id}>
              <img src={image.url_image} />
              <ImageActions>
                <BtnEdit
                  onClick={() => handleClickOnEdit(image.url_image, image.id)}
                />
                <BtnDelete onClick={() => deleteItem(image.id)} />
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
