const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
});

instance.interceptors.request.use(
  async function (request) {
    const token = request.headers.Authorization;

    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.token}`;
    } else if (token) {
      request.headers.Authorization = token;
    }
    return request;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
