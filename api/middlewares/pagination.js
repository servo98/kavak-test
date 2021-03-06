export default function(req, res, next) {
    const {limit, offset} = req.query;
    if(limit && offset && !isValidatePaginationParams(limit, offset)){
            return res.json({error: 'Invalid pagination parameters'})
    }
    next();
}

function isValidatePaginationParams(limit, offset){
    return !isNaN(limit) && !isNaN(offset) && limit > 0 && offset >= 0;
}