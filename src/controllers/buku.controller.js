const Buku = require('../models/buku.model')

exports.tambahBuku = async(req,res)=>{

    try{

        await Buku.create(req.body)

        res.status(201).json({
            message:"Buku berhasil ditambahkan"
        })

    }catch(error){

        res.status(500).json({
            message:error.message
        })

    }

}