import firebase from "../utils/firebaseUtils";

interface Marcas {
    key: string
    nome: string
}

const getDataList = (nodePath: string) => {
    const db = firebase.firestore();
    return db.collection(nodePath).get().then((querySnapshot) => {
        return querySnapshot;
    });
}

const adicionarMarca = (nome: string) => {
    firebase.firestore().collection("marca").add({
        nome: nome,
    });
}

export default { getDataList, adicionarMarca }