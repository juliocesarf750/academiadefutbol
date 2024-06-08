import { pool } from "../../db.js";


export const getPermisos = async(req, res) => {
  try{
    const [Permisos] = await pool.query('select * from Permiso');
    res.status(200).json(Permisos);
  }catch(e){
    res.status(500).json({msg:e});
  }
}

export const getPermiso = async(req, res) => {
    try{
        const [Permiso] = await pool.query('select * from Permiso where = Permiso.ID',[req.params.id]);
        res.status(200).json(Permiso);
  
    }catch(e){
      res.status(500).json({msg:e});
    }
  }

  export const createPermiso = async(req, res) => {
    try{
        const {Nombre, Descripcion} = req.body;
        const [response] = await pool.query('insert into Permiso(Nombre,Descripcion) values(?,?)',[Nombre,Descripcion]);
        const id = response.insertId;
        res.status(200).json({ID:id,Nombre,Descripcion});
  
    }catch(e){
      res.status(500).json({msg:e});
    }
  }

  export const updatePermiso = async(req, res) => {
    try{
        const {Nombre,Descripcion}= req.body;
        await pool.query('update Permiso set Nombre=?, Descripcion =? where Permiso.ID=?',[Nombre,Descripcion,req.params.id]);
        res.status(200).json('the Permission was successfully updated');
  
    }catch(e){
      res.status(500).json({msg:e});
    }
  }

  export const deletePermiso = async(req, res) => {
    try{

        await pool.query('delete from Permiso where Permiso.ID=?',[req.params.id]);
        res.status(200).json({msg:'the permission was successfully deleted'});
  
    }catch(e){
      res.status(500).json({msg:e});
    }
  }