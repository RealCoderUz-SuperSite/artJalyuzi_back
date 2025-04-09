const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  addServicesSchema,
  patchServicesSchema,
  allServicesSchema,
} = require("./_schemas");
const addServicesService = require("./add");
const editServicesService = require("./edit");
const showServicesService = require("./show");
const removeServicesService = require("./remove");
const allServicesService = require("./all");
const { UnauthorizedError } = require("../../shared/errors");

const addServices = async (req, res, next) => {
  try {
    // httpValidator({ body: req.body }, addServicesSchema);

    const result = await addServicesService(req);

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

const patchServices = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, patchServicesSchema);

    const result = await editServicesService({
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

const showServices = async (req, res, next) => {
  try {
    const result = await showServicesService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getServices = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, allServicesSchema);

    const { query } = req;
    const offset =
      query && query.page && query.page.offset
        ? parseInt(query.page.offset)
        : undefined;
    const limit =
      query && query.page && query.page.limit
        ? parseInt(query.page.limit)
        : undefined;

    const result = await allServicesService({
      q: query.q,
      sort: query.sort,
      page: { limit, offset },
    });

    res.status(200).json({
      data: result.services,
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

const deleteServices = async (req, res, next) => {
  try {
    const result = await removeServicesService({ id: req.params.id });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addServices,
  patchServices,
  showServices,
  deleteServices,
  getServices,
};
