import firebase from "../firebase";
import IWalletData from "../types/Wallet"

const db = firebase.ref("/tutorials");

class TutorialDataService {
  getAll() {
    return db;
  }

  create(wallet: IWalletData) {
    return db.push(wallet);
  }

  update(id: string, value: any) {
    return db.child(id).update(value);
  }

  delete(id: string) {
    return db.child(id).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new TutorialDataService();