/**
 * A set of functions called "actions" for `custom-endpoint`
 */

import customEndpointService from '../services/custom-endpoint';

export default {
  async customHandler(ctx) {
    const data = await customEndpointService.fetchData();
    console.log("custom",data)
    ctx.body = data;
  },
};

