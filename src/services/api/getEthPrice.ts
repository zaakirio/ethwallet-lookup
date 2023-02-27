import axios from "axios";

export async function getEthPrice(): Promise<number> {
  const response = await axios.get(
    `http://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_API_KEY}`
  );
  if(!response){
    return 0;
  }
  return response.data.result.ethusd;
}
