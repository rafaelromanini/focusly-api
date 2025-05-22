/**
 * task controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::task.task",
  ({ strapi }) => ({
    // Find All
    async find(ctx) {
      const user = ctx.state.user;

      const tasks = await strapi.entityService.findMany("api::task.task", {
        filters: { user: user.id },
        populate: ["goal"],
      });

      const sanitizedEntity = await this.sanitizeOutput(tasks, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Find One
    async findOne(ctx) {
      const taskId = parseInt(ctx.params.id, 10);
      if (isNaN(taskId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId, user: user.id },
        populate: ["goal"],
      });

      if (!task) return ctx.notFound("Task not found");

      const sanitizedEntity = await this.sanitizeOutput(task, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Create
    async create(ctx) {
      const user = ctx.state.user;
      const { data } = ctx.request.body;

      if (data.goal) {
        const goal = await strapi.db.query("api::goal.goal").findOne({
          where: { id: data.goal, user: user.id },
        });
        if (!goal) {
          return ctx.badRequest("Invalid goal for this user");
        }
      }

      const response = await strapi.service("api::task.task").create({
        data: {
          ...data,
          user: user.id,
        },
      });

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Delete
    async delete(ctx) {
      const taskId = parseInt(ctx.params.id, 10);
      if (isNaN(taskId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId, user: user.id },
      });

      if (!task) return ctx.notFound("Task not found");

      await strapi.db.query("api::task.task").delete({
        where: { id: taskId },
      });

      const sanitizedEntity = await this.sanitizeOutput(task, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Update
    async update(ctx) {
      const taskId = parseInt(ctx.params.id, 10);
      if (isNaN(taskId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId, user: user.id },
      });

      if (!task) return ctx.notFound("Task not found");

      const { data } = ctx.request.body;

      if (data.goal) {
        const goal = await strapi.db.query("api::goal.goal").findOne({
          where: { id: data.goal, user: user.id },
        });
        if (!goal) {
          return ctx.badRequest("Invalid goal for this user");
        }
      }

      const updatedTask = await strapi.db.query("api::task.task").update({
        where: { id: taskId },
        data: data,
      });

      const sanitizedEntity = await this.sanitizeOutput(updatedTask, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
