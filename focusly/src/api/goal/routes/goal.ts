/**
 * goal router
 */

// import { factories } from '@strapi/strapi';


// Core Router
//import { factories } from '@strapi/strapi';
//export default factories.createCoreRouter('api::goal.goal');


export default {
  routes: [
    {
      method: 'GET',
      path: '/goals',
      handler: 'api::goal.goal.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/goals',
      handler: 'api::goal.goal.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/goals/:id',
      handler: 'api::goal.goal.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/goals/:id',
      handler: 'api::goal.goal.delete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/goals/:id',
      handler: 'api::goal.goal.findOne',
      config: {
        auth: false,
      },
    },
  ],
};