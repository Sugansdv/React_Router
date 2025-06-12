import axios from "axios";

// Global Configuration - Task 9
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer fakeToken123";

// Add retry count as a custom config field
const MAX_RETRIES = 3;

// Request Interceptor - Task 10
axios.interceptors.request.use(
  (config) => {
    console.log("Axios Request:", config);
    return config;
  },
  (error) => {
    console.error("Axios Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor with Retry Logic -Task 12
axios.interceptors.response.use(
  (response) => {
    console.log("Axios Response:", response);
    return response;
  },
  async (error) => {
    const config = error.config;

    // If config doesn't exist or retry flag is false, reject
    if (!config || config._retryCount >= MAX_RETRIES) {
      console.error("Axios Response Error (No Retry):", error);
      return Promise.reject(error);
    }

    // Initialize retry count
    config._retryCount = config._retryCount || 0;

    // Check if retry is applicable (network error or 5xx status)
    if (error.code === "ECONNABORTED" || (error.response && error.response.status >= 500)) {
      config._retryCount += 1;
      console.warn(`Retry attempt ${config._retryCount} for ${config.url}`);
      return axios(config); // Retry request
    }

    return Promise.reject(error);
  }
);

export default axios;
