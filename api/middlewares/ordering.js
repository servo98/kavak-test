export default function(req, res, next) {
    const {sortBy, orderBy} = req.query;
    if((!sortBy || !orderBy) || !isValidateOrderingParams(sortBy, orderBy)){
        return res.json({error: 'Invalid ordeginr parameters'})
    }

    next();
}

function isValidateOrderingParams(sortBy, orderBy){
    return (orderBy.toUpperCase() == 'ASC' || orderBy.toUpperCase() == 'DESC') && sortBy != undefined && sortBy.length > 0;
}