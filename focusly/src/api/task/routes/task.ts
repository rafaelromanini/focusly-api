/**
 * task router
 */

// import { factories } from '@strapi/strapi';
// export default factories.createCoreRouter('api::task.task');

export default {
  routes: [
    {
      method: 'GET',
      path: '/tasks',
      handler: 'api::task.task.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/tasks',
      handler: 'api::task.task.create',
      config: {
        auth: false,
      },
    },
    {
      method: 'PUT',
      path: '/tasks/:id',
      handler: 'api::task.task.update',
      config: {
        auth: false,
      },
    },
    {
      method: 'DELETE',
      path: '/tasks/:id',
      handler: 'api::task.task.delete',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/tasks/:id',
      handler: 'api::task.task.findOne',
      config: {
        auth: false,
      },
    },
  ],
};
