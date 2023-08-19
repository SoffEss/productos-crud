/** Dto */
const dto = require("../../model/dto/products.dto");
const notHelper= require("../helpers/notification.helper")
exports.createProducts = (req, res, next) => {
    let pdt = {
        identifier: req.body.id,
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        category: req.body.category,
        expiration_date: req.body.expiration_date,
        weight: req.body.weight
    };
    dto.create(pdt, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.updateProducts = (req, res, next) => {
    let pdt = {
        identifier: req.body.id,
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        category: req.body.category,
        expiration_date: req.body.expiration_date,
        weight: req.body.weight
    };
    dto.update({_id: req.body.id}, pdt, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        )
    });
};

exports.getAll = (req, res, next) => {  
    dto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};

exports.getByIdentifier = (req, res, next) => {  
    dto.getByIdentifier({identifier: req.params.identifier}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        )
    });
};

exports.deleteProducts = () => {  
    dto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
};