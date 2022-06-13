"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
exports.default = joi.object({
    nome: joi.string().empty().required().min(3)
        .messages({
        'any.required': '400| O nome é obrigatório',
        'string.empty': '400| O nome é obrigatório',
        'string.min': '401| Nome precisa ter no minimo 3 caracteres',
    }),
    email: joi.string().empty().required().email().messages({
        'any.required': '400| O email é obrigatório',
        'string.empty': '400| O email é obrigatório',
        'string.email': '409| O email precisa estar com o formato de "email"',
    }),
    CEP: joi.string().empty().required().min(9).max(9).messages({
        'any.required': '400| O CEP é obrigatório',
        'string.empty': '400| O CEP é obrigatório',
        'string.min': '409| O CEP precisa ter 9 caractéres',
        'string.max': '409| O CEP precisa ter 9 caractéres',
    }),
    logradouro: joi.string().required().empty().messages({
        'any.required': '400| O logradouro é obrigatório',
        'string.empty': '400| O logradouro é obrigatório',
    }),
    bairro: joi.string().required().empty().messages({
        'any.required': '400| O bairro é obrigatório',
        'string.empty': '400| O bairro é obrigatório',
    }),
    localidade: joi.string().required().empty().messages({
        'any.required': '400| O localidade é obrigatório',
        'string.empty': '400| A localidade é obrigatória',
    }),
    UF: joi.string().empty().required().messages({
        'any.required': '400| O UF é obrigatório',
        'string.empty': '400| O UF é obrigatório',
    }),
});
//# sourceMappingURL=userSchema.js.map