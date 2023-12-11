import instance from "./config";

export const actions = {
  // Connecter un utilisateur
  async connectUser(data) {
    try {
      const response = await instance.post("/auth/local", data);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

  // Récupérer les données de l'utilisateur via son token
  async getMe() {
    try {
      const response = await axios.get("/users/me");
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  // Récupérer un seul user via son id
  async findOneUser(id) {
    try {
      const response = await axios.get(`/users/${id}`);
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  // Récupérer toutes les utilisateurs
  async findUsers() {
    try {
      const response = await axios.get("/users");
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  // Créer un utilisateur
  async createUser(data) {
    try {
      const response = await instance.post("/auth/local/register", data);
      return response;
    } catch (error) {
      return error.response?.data;
    }
  },

  // Modifier un utilisateur
  async updateUser(data) {
    try {
      const response = await instance.put(`/users/${id}`, data);
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  // Modifier un utilisateur
  async forgotPassword(data) {
    try {
      const response = await instance.put("/users", data);
      return response;
    } catch (error) {
      return error.response.data;
    }
  },

  // Supprimer un utilisateur
  async destroyUser(id) {
    try {
      const response = await axios.delete(`/users/${id}`);
      return response;
    } catch (error) {
      return error.response.data;
    }
  },
};
