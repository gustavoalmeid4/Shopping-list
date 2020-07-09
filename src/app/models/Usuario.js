const { Sequelize } = require('sequelize');
const { password } = require('../../config/database');

class Usuario extends Model{
    static init (sequelize){
        super.init( 
            {
                nome:Sequelize.String,
                email:Sequelize.String,
                password_hash:Sequelize.String,
            },

            {
                sequelize,
            }
        );

        this.addHook("beforeSave" , async(usuario)=>{
            if(usuario.password){
                usuario.password_hash=await bcrypt.hash(usuario.password,$)
            }
        })
    }

    checkPassword(password){
        return bcrypt.compare(password, this.password_hash);
       }




}

export default Usuario;