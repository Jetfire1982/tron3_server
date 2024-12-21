const Router = require("express")
// const jwt=require('jsonwebtoken');
const config=require('config');

const router = new Router();



router.post('/login',
(req, res) => {
    try {

        // fs.readdir(path.resolve(__dirname, '..', 'static'), (err, files)=>{
        //     if (err) throw err;
        
        //     console.log("STATIC INSIDE from login = ",files);
        // })

        // fs.readdir(path.resolve(__dirname, '..', 'files', '643fb841262a202b048e74e0'), (err, files)=>{
        //     if (err) throw err;
        
        //     console.log("FILES/643fb841262a202b048e74e0 inside from login = ",files);
        // })

        // fs.readdir(path.resolve(__dirname, '..', 'files'), (err, files)=>{
        //     if (err) throw err;
        
        //     console.log("FILES inside from login = ",files);
        // })

        // fs.readdir(path.resolve(__dirname, '..'), (err, files)=>{
        //     if (err) throw err;
        
        //     console.log("DIR from login = ",files);
        // })

       const{password}=req.body



        // const user=await User.findOne({email}) //пробуем найти юзера по email
        if(config.get("password")!==password){ //т.е. если пользователь не будет найден то вернем ошибку
            return res.status(404).json({message:"Password is wrong"})
        }
       
        //теперь нам понадобится тот самый JWTOKEN 
        //воспользуемся этой библиотекой и создадим сам токен - вызовем ф-ию sign который принимает три параметра:
        //первым параметром мы передаем объект с данными который мы хотим поместить в токен и в нашем случае это id пользователя.
        //теперь в default.json создадим секретный ключ ("secretKey") по которому будет происходить шифрование - секретный ключ
        //может быть абсолютно любым. И этот секретный ключ передадим вторым параметром в ф-ию sign. Третьим параметром передадим
        //объект в котором укажем сколько времени будет токен существовать
        const token=jwt.sign({pass:password},config.get("secretKey"), {expiresIn:"1h"})
        //после создания токена нам необходимо вернуть его обратно на клиент. Вернем также некие данные о юзере за исключением
        //пароля
        return res.json({
            token,
            // user:{
            //     id: user.id,
            //     email: user.email,
            //     diskSpace: user.diskSpace,
            //     usedSpace: user.usedSpace,
            //     avatar: user.avatar 
            // }
        })
    } catch (e) {
        console.log(e)
            //  res.send({ message: "Server error!!!" })  //т.е. мы будем выводить ошибку в логе и отравлять пользователю сообщение
            res.status(500).json({message:"Server error! We are doing our best to fix it"})
    }
}
)