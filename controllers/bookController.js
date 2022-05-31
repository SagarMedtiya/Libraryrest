const BookDB = require('../models/book-model')
class BookController{   
     create(req,res){
        if(!req.body){
            return res.status(400).send({message: "Content cannot be empty!"})
        }
        const book = new BookDB({
            author : req.body.author,
            title: req.body.title,
            isbn: req.body.isbn,
            releasedate: req.body.releasedate
        })
        book.save(book)
            .then(data=>{
                res.status(200).send({message :"Book added"})
            })
            .catch(err=>{
                res.status(500).send({message:err.message})
            })

    }
    update(req,res){
        if(!req.body){
            return res.status(400).send({message: "Content cannot be empty!"})
        }
        const id = req.params.id;
        BookDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Update book with ${id}. `})
            }else{
                res.status(200).send({message :"Book updated!"})
            }
        })
        .catch(err=>{
            res.status(500).send({message : "Error update book information"})
        })
    }
    delete(req,res){
        const id = req.params.id;
        BookDB.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot delete with id ${id} Maybe id is wrong`})
            }else(
                res.send({message: "Book Deleted successfully"})
            )
        })
        .catch(err=>{
            res.status(500).send({message: `Cannot delete with id ${id}` })
        })
    }
}

module.exports = new BookController();