/**
 * task router
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/tasks",
      handler: "api::task.task.find",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "POST",
      path: "/tasks",
      handler: "api::task.task.create",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "PUT",
      path: "/tasks/:id",
      handler: "api::task.task.update",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "DELETE",
      path: "/tasks/:id",
      handler: "api::task.task.delete",
      config: {
        auth: { enabled: true },
      },
    },
    {
      method: "GET",
      path: "/tasks/:id",
      handler: "api::task.task.findOne",
      config: {
        auth: { enabled: true },
      },
    },
  ],
};
