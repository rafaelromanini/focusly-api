/**
 * goal router
 */

// import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: "GET",
      path: "/goals",
      handler: "api::goal.goal.find",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "POST",
      path: "/goals",
      handler: "api::goal.goal.create",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "PUT",
      path: "/goals/:id",
      handler: "api::goal.goal.update",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "DELETE",
      path: "/goals/:id",
      handler: "api::goal.goal.delete",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "GET",
      path: "/goals/:id",
      handler: "api::goal.goal.findOne",
      config: {
        auth: { enabled: true },
      },
    },
  ],
};
