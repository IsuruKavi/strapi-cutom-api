import axios from 'axios';

export default {
  async afterCreate(event) {
    const { result } = event;
    console.log("result>>>>>",result)

    try {
      // Prepare the data to send to the external API
      const payload = {
        name: result.Name,
        email: result.Email,

      };

      // Trigger the external API
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);

      console.log('External API response:', response.data);
    } catch (error) {
      console.error('Error triggering external API:', error);
    }
  },
};
