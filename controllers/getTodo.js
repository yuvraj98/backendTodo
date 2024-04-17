const Todo = require("../models/Todo");

exports.getTodo = async(req, res) => {
    try{
        

        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data: todos,
            message: "Entire Todo Data is Fetched"
        });

    }
    catch(err){
       
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message: err.message,
        })
    }
}

exports.getTodoById = async(req, res) => {
    try{
        

        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo){
            return res.status(404).json({
                success: false,
                message: "No Data Found In Given Id",
            })
        }

        res.status(200)
        .json({
            success:true,
            data: todo,
            message: "Entire Todo Data is Fetched"
        })

        res.status(200)
        .json({
            success:true,
            data: todo,
            message: `Todo ${id} data successfully fetched`,
        });

    }
    catch(err){
       
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message: err.message,
        })
    }
}