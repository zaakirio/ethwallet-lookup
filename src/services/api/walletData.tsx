import axios from "axios";
import Wallet from "../../types/Wallet";

export async function  getWalletData (walletAddress: string){
    axios.get(
      `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
    ).then(response => {
      const data = (response.data.result / 1000000000000000000).toString();
      const walletResult: Wallet = { address: walletAddress, balance: data };
      return walletResult;
    }
    );
  };