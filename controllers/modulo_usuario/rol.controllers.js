import { json } from "express";
import { pool } from "../../db.js";


export const getRoles = async(req, res) => {
    try{
         const [roles] = await pool.query('select * from Rol');
         res.status(200).json(roles);
    }catch(e){
        res.status(500).json({msg:e});
    }
}

export const getRol = async(req, res) => {
    try{

        const [rol] = await pool.query('select * from Rol where Rol.ID=?',[req.params.id]);
        res.status(200).json(rol);

    }catch(e){
        res.status(500).json({msg:e});
    }
}

export const createRoles = async(req, res) => {
    try{
        const {Nombre,Descripcion}= req.body;
        const [Rol] = await pool.query('insert into Rol(Nombre,Descripcion) values (?,?)',[Nombre,Descripcion]);
        const id = Rol.insertId;
        res.status(200).json({ID:id,Nombre:Nombre,Descripcion:Descripcion});
    }catch(e){
        res.status(500).json({msg:e});
    }
}

export const updateRoles = async(req, res) => {
    try{
        const {Nombre,Descripcion}= req.body;
        await pool.query('update Rol set Nombre=?,Descripcion=? where Rol.ID=?',[Nombre,Descripcion,req.params.id]);
        res.status(200).json({msg:"the rol was successfully updated"});
    }catch(e){
        res.status(500).json({msg:e});
    }
}

export const deleteRoles = async(req, res) => {
    try{
       await pool.query('delete from Rol where Rol.ID=?',[req.params.id]);
       res.status(200).json({msg:'The Rol was successfully deleted'});
    }catch(e){
        res.status(500).json({msg:e});
    }
}