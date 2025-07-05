import express from 'express'
import plublicRotas from './routes/public.js'

const app = express ()
app.use(express.json())

app.use('/', plublicRotas)

// Criar 3 rotas
// 1 usuario se cadastrar
// 2 login
// 3 cadastro

// Rotas Publicas 
// Cadastro e Login 

// Rotas Privadas
// Listar Usuario


app.listen(3000, () => console.log ("Servidor Rodando 🚀"))






// mongo
// y9lgSis8TYd9BAMb 
// mongodb+srv://vihcamargo:<db_password>@users.eqcoxmx.mongodb.net/?retryWrites=true&w=majority&appName=Users