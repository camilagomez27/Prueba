console.log('Probando NodeJS!')
const express= require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.listen(3000,()=>
console.log('servidor corriendo'))

console.log('Prueba 2')
