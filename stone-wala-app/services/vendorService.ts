import api from "./api";

export const getVendorDashboardData = async () => {
  try {
    const response = await api.get("/categories"); 
    console.log(response,"ok")
    return response.data;
  } catch (error) {
    throw error;
  }
};