var products = [{id:1, name:'RedMi', price:'200$'},
{id:2, name:'OnePlus', price:'300$'},
{id:3, name:'Honour', price:'250$'}];


function productsCtrl(){
    this.get = function(req, res){
        res.json(products);
    }

    this.getById = function(req, res){
        var id= parseInt(req.params.id); 
        var result;
        for (var i=0; i<products.length;i++){
            if (products[i].id===id){
                result = products[i];
            }
        }
        if(result){
            res.status(200);
            res.json(result);
        }
        else{
            res.status(404);
            res.send("Unable to fetch the data...");
        }
        
    }

    this.save = function(req,res){
        
        products.push(req.body);

        res.status(201);
        res.send(req.body);
    }
}


module.exports = new productsCtrl();