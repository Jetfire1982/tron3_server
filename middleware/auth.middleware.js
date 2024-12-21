//делаем так чтобы каждый раз когда мы открываем приложение в браузере - мы получали данные о пользователе.
//И для этого мы реализуем некую ф-ию на сервере которая по токину будет получать пользователя и возвращать его обратно
//Так как нам надо будет идентифицировать пользователя и при получении файлов и при выполнении каких либо
//других операций создадим этот миддлевейер
// const jwt=require('jsonwebtoken');
const config=require('config');
const jwt=require('jsonwebtoken');




module.exports=(req,res,next)=>{
    // console.log("Request here1, req.method!!! = ",req.method)
  
    if(req.method==="OPTIONS"){ //т.е. если метод запроса OPTIONS то вызовем следующий middleware функцией next
        // console.log("Request here2, req.method = ",req.method)
        return next();
    } 

   
    try{
        //!!!Ниже мы получаем token из заголовка запроса authorization и так как токен состоит из двух частей - это
        //слово beerer и непосредственно сам токен то мы разделим его ф-ией split и получим второй элемент массива т.е.
        //непосредственно сам токен
       
       
        const token=req.headers.authorization.split(' ')[1]
       
      
        if(!token){
            //т.е. если токена у нас нет то мы вернем соответствующее сообщение
          
            return res.status(401).json({message: "Authorisation Error"})
        } 
        
        //ниже мы раскодируем токен и получаем из него все данные, которые мы в него вшивали. Первым параметром
        //передадим токен а вторым секретный ключ который получим из config
        const decoded=jwt.verify(token, config.get('secretKey'))
        //этот decoded может иметь следующий вид { id: '61360ad8d053f52c04f07e1d', iat: 1633606892, exp: 1633610492 }
        //далее в запрос поля user добавим декодированные данные из токена:
       
        if(decoded.password === config.get("password"))
            req.permission = true
        // if(token === 3){
        //    console.log("here")
        // req.user="Test passed"
        // }else{
        //     return res.status(401).json({message: "Authorisation Error"}) 
        // }
        next() //чтобы вызвать по цепочке следующий middleware
    }catch(e){
        console.log("here")
        //если была поймана какая-то ошибка вернем какое нибудь сообщение
      
        return res.status(401).json({message:"Authorisation Error"})
    }
}

