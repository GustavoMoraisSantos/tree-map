import api from "./axiosconfig";

export const fetchRegionalData = async (region) => {
    console.log('caiu aqui com o param', region)
   // https://servicodados.ibge.gov.br/api/v3/agregados/617/periodos/2010/variaveis/289?localidades=N2[4]&classificacao=58[all]
  try {
    const response = await api.get(`/617/periodos/2010/variaveis/289?localidades=N2[${region}]&classificacao=58[all]`);
    console.log(response.data[0])
  } catch (error) {
    alert(error);
  }
};
