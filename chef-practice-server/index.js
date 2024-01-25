const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000


const recipes = require('./data/Recipes.json');
const chef=require('./data/Chefs.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Chef Server is on')
})

app.get('/recipes', (req,res)=>{
    res.send(recipes)
})

app.get('/recipes/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedRecipe = recipes.find(recipe =>recipe.id ===id);
    res.send( selectedRecipe );
})

app.get('/chef',(req,res)=>{
  res.send(chef);
})

app.get('/chef/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    if(id===0){
      res.send(chef);
    }
    else{
      const chefCategories = recipes.filter(recipe=>recipe.category===id);
      res.send(chefCategories);
    }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})