import { pool } from "../../db.js";
import bcrypt from 'bcrypt';


export const registro = async (req, res) => {
    const {Codigo, Nombre, Apellido, Email, Contracena, Telefono, Id_Rol } = req.body;

    try {
    
        const hashedPassword = await bcrypt.hash(Contracena, 10);

     
        const [response] = await pool.query(
            'INSERT INTO Usuario (Codigo, Nombre, Apellido, Email, Contracena, Telefono, Id_Rol) VALUES (?,?, ?, ?, ?, ?, ?)',
            [Codigo, Nombre, Apellido, Email, hashedPassword, Telefono, Id_Rol]
        );

        
        res.status(201).json({Codigo,Nombre,Apellido,Email,Telefono,Id_Rol });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const login = async (req, res) => {
    const { Email, Contracena } = req.body;

    try {
        
        const [user] = await pool.query('SELECT * FROM Usuario WHERE Email = ?', [Email]);

        if (user == '') {
            return res.status(401).json({ message: 'Contracena o Email Incorrectos' });
        }

        const passwordMatch = await bcrypt.compare(Contracena, user[0].Contracena);

        if (passwordMatch) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Contracena o Email Incorrectos' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export const logout = async(req, res) => {
    try{

    }catch(e){
        res.status(500).json({msg:e});
    }
}




export const getUsuarios = async(req, res)=>{
    try{
        const [response] = await pool.query('select * from Usuario');
            return res.status(200).json(response);
    }catch(e){
        res.status(500).json({msg:e});
    }
}


export const getUsuario = async(req, res) => {
    try{

    }catch(e){
        res.status(500).json({msg:e});
    }
}

export const deleteUsuarios = async(req, res)=>{
    try{
        const [response] = await pool.query('delete from Usuario where Usuario.Codigo=?',[req.paramas.id]);
        if(response.affectedRows){
           return res.status(200);
        }

        return res.status(404);
       
    }catch(e){
        res.status(500).json({msg:e});
    }
}

