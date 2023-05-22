
exports.getTest = (req, res, next) => {
    res.status(200).json({ id: 1, name: 'Ram', age: 33 });
};

exports.getTestList = (req, res, next) => {
    res.status(200).json(
        [
            { id: 1, name: 'Ram', age: 33 },
            { id: 2, name: 'Krisha', age: 35 },
            { id: 3, name: 'Manish', age: 36 },
            { id: 4, name: 'Mangesh', age: 38 },
            { id: 5, name: 'Kalpesh', age: 39 },
        ]
    );
};

exports.postTest = (req, res, next) => {
    res.status(200).json(req.body);
};


exports.getTestDetail = (req, res, next) => {
    res.status(200).json('Detailed');
};

exports.postTestDetail = (req, res, next) => {
    res.status(200).json('Deleted');
};