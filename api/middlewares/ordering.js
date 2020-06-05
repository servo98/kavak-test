export default function(req, res, next) {
    const {sortBy, orderBy} = req.params;
    if(sortBy && orderBy){
        if( !isValidateOrderingParams(sortBy, orderBy)) {
            return res.json({error: 'Invalid ordeginr parameters'})
        }
    }
    next();
}

function isValidateOrderingParams(sortBy, orderBy){
    return (orderBy == 'asc' || orderBy == 'desc') && sortBy;
}