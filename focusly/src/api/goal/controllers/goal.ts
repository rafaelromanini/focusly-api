/**
 * goal controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::goal.goal",
  ({ strapi }) => ({
    // Find All
    async find(ctx) {
      const user = ctx.state.user;

      const goals = await strapi.entityService.findMany("api::goal.goal", {
        filters: { user: user.id },
        populate: ["tasks"],
      });

      const sanitizedEntity = await this.sanitizeOutput(goals, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Find One
    async findOne(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const goal = await strapi.db.query("api::goal.goal").findOne({
        where: { id: goalId, user: user.id },
        populate: ["tasks"],
      });

      if (!goal) return ctx.notFound("Goal not found");

      const sanitizedEntity = await this.sanitizeOutput(goal, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Create
    async create(ctx) {
      const user = ctx.state.user;

      const response = await strapi.service("api::goal.goal").create({
        data: {
          ...ctx.request.body.data,
          user: user.id,
        },
      });

      const sanitizedEntity = await this.sanitizeOutput(response, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Update
    async update(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const goal = await strapi.db.query("api::goal.goal").findOne({
        where: { id: goalId, user: user.id },
      });

      if (!goal) return ctx.notFound("Goal not found");

      const updatedGoal = await strapi.db.query("api::goal.goal").update({
        where: { id: goalId },
        data: ctx.request.body.data,
      });

      const sanitizedEntity = await this.sanitizeOutput(updatedGoal, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    // Delete
    async delete(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const user = ctx.state.user;

      const goal = await strapi.db.query("api::goal.goal").findOne({
        where: { id: goalId, user: user.id },
      });

      if (!goal) return ctx.notFound("Goal not found");

      await strapi.db.query("api::goal.goal").delete({
        where: { id: goalId },
      });

      const sanitizedEntity = await this.sanitizeOutput(goal, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
