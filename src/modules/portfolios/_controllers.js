const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  addPortfoliosSchema,
  patchPortfoliosSchema,
  allPortfoliosSchema,
} = require("./_schemas");
const addPortfoliosService = require("./add");
const editPortfoliosService = require("./edit");
const showPortfoliosService = require("./show");
const removePortfoliosService = require("./remove");
const allPortfoliosService = require("./all");
const { UnauthorizedError } = require("../../shared/errors");

const addPortfolios = async (req, res, next) => {
  try {
    // httpValidator({ body: req.body }, addPortfoliosSchema);

    const result = await addPortfoliosService(req);

    console.log(result, "result");

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    console.log(error);
    next(error);
  }
};

const patchPortfolios = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchPortfoliosSchema);

    const result = await editPortfoliosService({
      id: req.params.id,
      changes: { ...req.body },
    });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const showPortfolios = async (req, res, next) => {
  try {
    const result = await showPortfoliosService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getPortfolios = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, allPortfoliosSchema);

    const { query } = req;
    const offset =
      query && query.page && query.page.offset
        ? parseInt(query.page.offset)
        : undefined;
    const limit =
      query && query.page && query.page.limit
        ? parseInt(query.page.limit)
        : undefined;

    const result = await allPortfoliosService({
      q: query.q,
      sort: query.sort,
      page: { limit, offset },
    });

    res.status(200).json({
      data: result.portfolios,
      pageInfo: {
        total: result.total,
        offset: result.offset,
        limit: result.limit,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deletePortfolios = async (req, res, next) => {
  try {
    const result = await removePortfoliosService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPortfolios,
  patchPortfolios,
  showPortfolios,
  deletePortfolios,
  getPortfolios,
};
