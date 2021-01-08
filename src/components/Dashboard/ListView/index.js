import React from "react";

import { withRouter } from 'react-router-dom';

import {
  PageListView,
  Container,
  Tab,
  List,
  ListItem,
  TabList,
  BtnAdd,
  Title,
  ArrowToBack
} from "./styles";

import TabItem from "../TabItem/index";

import Actions from "../ActionsListItem/index";

import FormModal from "../FormModal/index";

import ErrorModal from "../ErrorModal/index";

import Modal from "../Modal/index";

import api from "../../../services/api";

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabItemActiveIndex: 1,
      listOpened: "",
      itemsToList: [],
      modalObjConfig: null,
      showList: false,
    };

    this.handleClickTabItem = this.handleClickTabItem.bind(this);
    this.handleClickOpenForm = this.handleClickOpenForm.bind(this);
    this.getDataList = this.getDataList.bind(this);
  }

  componentDidMount() {
    this.setState({ listOpened: "imobiliarias" }, () => {
      this.getDataList();
    });
  }

  async getDataList() {
    try {
      this.setState({ showList: false });
      let response = await api.get(`/condominios/${this.props.condominioKey}/${this.state.listOpened}`);
      if (response.data.length === 0) {
        response = await api.get(`/condominios/default/${this.state.listOpened}`);
      }
      this.setState({ itemsToList: response.data, showList: true });
    } catch (err) {
      console.error(err);
      const errorMessage =
        err.response.status === 401
          ? "Falha ao autenticar"
          : "Ops... Ocorreu um erro :/";
      this.setState({
        modalObjConfig: {
          componentToRender: ErrorModal,
          componentProps: { errorMessage },
        },
      });
    }
  }

  handleClickTabItem(index, list) {
    this.setState({ tabItemActiveIndex: index, listOpened: list }, () => {
      this.getDataList();
    });
  }

  handleClickOpenForm(method, index = 0, itemId = "") {
    const fields = [];
    let title = "";
    let contentsLabels = [];

    if (this.state.listOpened === "imobiliarias") {
      contentsLabels = [
        "Chave",
        "Nome",
        "Telefone Fixo",
        "Telefone Celular",
        "URL do website",
        "URL da logo de introdução",
        "URL da logo mobile",
        "URL da logo base direita",
        "URL da logo menu",
        "URL da logo marca d'água",
      ];
      title = "Imobiliária";
    } else if (this.state.listOpened === "imoveis") {
      contentsLabels = [
        "Título",
        "Quantidade de dormitórios",
        "Área",
        "Valor",
        "URL da thumbnail",
        "URL da galeria (baixar)",
        "URL da galeria (compartilhar)",
        "URL do VT360",
        "Função ao clicar na localização",
        "Nomes para os hotspots",
      ];
      title = "Imóvel";
    } else if (this.state.listOpened === "imagens") {
      contentsLabels = ["URL da imagem"];
      title = "Imagem";
    }

    let indexOfKey = 0;
    for (let key in this.state.itemsToList[index]) {
      if (
        key.toString() === "createdAt" ||
        key.toString() === "updatedAt" ||
        key.toString() === "id" ||
        key.toString() === "chave_condominio"
      )
        continue;
      fields.push({
        label: { for: key.toString(), content: contentsLabels[indexOfKey] },
        input: {
          type: "text",
          name: key.toString(),
          value: method === "update" ? this.state.itemsToList[index][key] : "",
        },
      });
      indexOfKey++;
    }

    this.setState({
      modalObjConfig: {
        componentToRender: FormModal,
        componentProps: {
          fields,
          title,
          list: this.state.listOpened,
          method,
          itemId,
          index,
          methodToUpdateList: this.getDataList,
          condominioKey: this.props.condominioKey
        },
      },
  });

  }

  render() {
    const tablist = () => {
      if (this.state.listOpened === "imobiliarias") {
        return (
          <TabList list={this.state.listOpened}>
            <td>
              <span>logo</span>
            </td>
            <td>
              <span>id</span>
            </td>
            <td>
              <span>chave</span>
            </td>
            <td>
              <span>nome</span>
            </td>
            <td>
              <span>ações</span>
            </td>
          </TabList>
        );
      } else if (this.state.listOpened === "imoveis") {
        return (
          <TabList list={this.state.listOpened}>
            <td>
              <span>thumb</span>
            </td>
            <td>
              <span>id</span>
            </td>
            <td>
              <span>Título</span>
            </td>
            <td>
              <span>Valor</span>
            </td>
            <td>
              <span>ações</span>
            </td>
          </TabList>
        );
      } else if (this.state.listOpened === "imagens") {
        return (
          <TabList list={this.state.listOpened}>
            <td>
              <span>Imagem</span>
            </td>
            <td>
              <span>id</span>
            </td>
            <td>
              <span>ações</span>
            </td>
          </TabList>
        );
      }
    };

    const closeModal = () => {
      this.setState({ modalObjConfig: null });
    };

    const modal = () => {
      return !this.state.modalObjConfig ? null : (
        <Modal
          componentToRender={this.state.modalObjConfig.componentToRender}
          componentProps={this.state.modalObjConfig.componentProps}
          closeModal={closeModal}
        />
      );
    };

    const backToSelection = () => {
      this.props.history.push('/select-condominio');
    };

    return (
        <PageListView>
          <Title>{ this.props.titleCondominio }:</Title>
          <Container>
          <ArrowToBack onClick={ backToSelection } />
            <Tab>
              <TabItem
                content="Imobiliárias"
                index={1}
                activeIndex={this.state.tabItemActiveIndex}
                list="imobiliarias"
                listOpened={this.state.listOpened}
                onClickFunction={this.handleClickTabItem}
              />
              <TabItem
                content="Imóveis"
                index={2}
                activeIndex={this.state.tabItemActiveIndex}
                list="imoveis"
                listOpened={this.state.listOpened}
                onClickFunction={this.handleClickTabItem}
              />
              <TabItem
                content="Imagens"
                index={3}
                activeIndex={this.state.tabItemActiveIndex}
                list="imagens"
                listOpened={this.state.listOpened}
                onClickFunction={this.handleClickTabItem}
              />
            </Tab>
            <List display={ this.state.showList }>
              <tbody>
                {tablist()}
                {this.state.itemsToList.length === 0
                  ? null
                  : this.state.itemsToList.map((item, index) => {
                      if (
                        this.state.listOpened === "imobiliarias" &&
                        item.chave_imobi !== "default"
                      ) {
                        return (
                          <ListItem list={this.state.listOpened} key={index}>
                            <td>
                              <img
                                src={item.url_logo_base_direita_imobi}
                                alt="logo"
                              />
                            </td>
                            <td>
                              <span>{item.id}</span>
                            </td>
                            <td>
                              <span>{item.chave_imobi}</span>
                            </td>
                            <td>
                              <span>{item.nome_imobi}</span>
                            </td>
                            <Actions
                              list={this.state.listOpened}
                              itemId={item.chave_imobi}
                              index={index}
                              openForm={this.handleClickOpenForm}
                              methodToUpdateList={this.getDataList}
                              condominioKey={ this.props.condominioKey }
                            />
                          </ListItem>
                        );
                      } else if (
                        this.state.listOpened === "imoveis" &&
                        item.titulo_imovel !== "default"
                      ) {
                        return (
                          <ListItem list={this.state.listOpened} key={index}>
                            <td>
                              <img src={item.url_thumb_imovel} alt="logo" />
                            </td>
                            <td>
                              <span>{item.id}</span>
                            </td>
                            <td>
                              <span>{item.titulo_imovel}</span>
                            </td>
                            <td>
                              <span>{item.valor_imovel}</span>
                            </td>
                            <Actions
                              list={this.state.listOpened}
                              itemId={item.id}
                              index={index}
                              openForm={this.handleClickOpenForm}
                              methodToUpdateList={this.getDataList}
                              condominioKey={ this.props.condominioKey }
                            />
                          </ListItem>
                        );
                      } else if (
                        this.state.listOpened === "imagens" &&
                        item.url_image !== "default"
                      ) {
                        return (
                          <ListItem list={this.state.listOpened} key={index}>
                            <td>
                              <img src={item.url_image} alt="logo" />
                            </td>
                            <td>
                              <span>{item.id}</span>
                            </td>
                            <Actions
                              list={this.state.listOpened}
                              itemId={item.id}
                              index={index}
                              openForm={this.handleClickOpenForm}
                              methodToUpdateList={this.getDataList}
                              condominioKey={ this.props.condominioKey }
                            />
                          </ListItem>
                        );
                      }
                    })}
              </tbody>
            </List>
            <BtnAdd
              onClick={() => {
                if (!this.state.modalObjConfig) {
                  this.handleClickOpenForm("post");
                }

                return;
              }}
            >
              Adicionar mais itens
            </BtnAdd>
          </Container>
          {modal()}
        </PageListView>
    );
  }
}

export default withRouter(ListView);
