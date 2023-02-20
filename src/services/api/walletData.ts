import Wallet from "../../types/Wallet";
// WRite api for fetching wallet data
// const getWalletData = async (walletAddress: string) =>{
//   fetch(
//     `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
//   ).then((response) =>  response.json()).then()
//     const data = (response.data.result / 1000000000000000000).toString();
//     const walletResult: Wallet = { address: walletAddress, balance: data };
//     return walletResult;
//   }


//WRite api for getting eth oprice
// export async function getEthPrice() {
//   fetch(
//     `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_API_KEY}`
//   ).then(response => {
//     const data = response.data.result.eth_usd;
//     return data;
//   }
//   );
// }
