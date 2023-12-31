import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";

interface IUsuario {
  name: string;
  estado: string;
}

interface IFilter {
  filter?: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IUsuario>(
    yup.object().shape({
      name: yup.string().required().min(3),
      estado: yup.string().required().min(3)
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().required().min(3),
    })
  )
}));

export const create: RequestHandler = async (req, res) => {
  
  console.log(req.body)

  return res.send('Vrau!!');
}