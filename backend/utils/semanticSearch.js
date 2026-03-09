const mapping={
    cold:["honey","ginger","lemon"],
    pizza:["flour","cheese","tomato"],
    breakfast:["bread","eggs","milk"]
};

function semanticSearch(query){

    query=query.toLowerCase();

    for(let key in mapping){
        if(query.includes(key)){
            return mapping[key];
        }
    }

    return [query];
}

module.exports = semanticSearch;
