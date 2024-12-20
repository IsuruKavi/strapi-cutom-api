/**
 * custom-endpoint service
 */
import axios from 'axios';

export default {
    async fetchData() {
      // Simulate fetching some data

      const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      return data
    },
  };
  
