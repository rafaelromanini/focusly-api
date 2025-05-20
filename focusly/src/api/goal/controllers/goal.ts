/**
 * goal controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::goal.goal",
  ({ strapi }) => ({
    async findOne(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const goal = await strapi.db
        .query("api::goal.goal")
        .findOne({ where: { id: goalId } });
      if (!goal) return ctx.notFound("Goal not found");

      const sanitizedEntity = await this.sanitizeOutput(goal, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async delete(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const goal = await strapi.db
        .query("api::goal.goal")
        .findOne({ where: { id: goalId } });
      if (!goal) return ctx.notFound("Goal not found");

      await strapi.db.query("api::goal.goal").delete({ where: { id: goalId } });

      const sanitizedEntity = await this.sanitizeOutput(goal, ctx);
      return this.transformResponse(sanitizedEntity);
    },

    async update(ctx) {
      const goalId = parseInt(ctx.params.id, 10);
      if (isNaN(goalId)) return ctx.badRequest("Invalid ID format");

      const goal = await strapi.db
        .query("api::goal.goal")
        .findOne({ where: { id: goalId } });
      if (!goal) return ctx.notFound("Goal not found");

      const updatedGoal = await strapi.db.query("api::goal.goal").update({
        where: { id: goalId },
        data: ctx.request.body.data,
      });

      const sanitizedEntity = await this.sanitizeOutput(updatedGoal, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
