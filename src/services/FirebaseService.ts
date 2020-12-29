import firebase from "../utils/firebaseUtils";

const getDataList = (nodePath: string) => {
    return firebase.firestore().collection(nodePath);
}

const adicionarMarca = (nome: string) => {
    firebase.firestore().collection("marca").add({
        nome: nome,
    });
}

export default { getDataList, adicionarMarca }