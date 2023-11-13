import api from "./axiosconfig";

export const fetchRegionalData = async (region) => {
  try {
    const response = await api.get(`/617/periodos/2010/variaveis/289?localidades=N2[${region}]&classificacao=58[all]`);
    return response.data[0];
  } catch (error) {
    alert(error);
  }
};
