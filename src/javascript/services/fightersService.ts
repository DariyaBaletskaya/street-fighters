import { callApi } from "../helpers/apiHelper";

class FighterService {
  async getFighters(): Promise<JSON[]> {
    try {
      const endpoint: string = "fighters.json";
      const apiResult = await callApi(endpoint, "GET");

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id: string): Promise<JSON[]> {
    try {
      const endpoint: string = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, "GET");

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
