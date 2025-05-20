/**
 * task controller
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::task.task",
  ({ strapi }) => ({

    // Find One
    async findOne(ctx) {
      const taskId = parseInt(ctx.params.id, 10);
      if (isNaN(taskId)) return ctx.badRequest("Invalid ID format");

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId },
      });

      if (!task) return ctx.notFound("Task not found");

      const sanitizedEntity = await this.sanitizeOutput(task, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Delete
    async delete(ctx) {
      const taskId = parseInt(ctx.params.id, 10);
      if (isNaN(taskId)) return ctx.badRequest("Invalid ID format");

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId },
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

      const task = await strapi.db.query("api::task.task").findOne({
        where: { id: taskId },
      });

      if (!task) return ctx.notFound("Task not found");

      const updatedTask = await strapi.db.query("api::task.task").update({
        where: { id: taskId },
        data: ctx.request.body.data, // <- CORRETO para Strapi 4/5
      });

      const sanitizedEntity = await this.sanitizeOutput(updatedTask, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
