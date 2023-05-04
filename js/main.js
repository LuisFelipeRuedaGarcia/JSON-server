console.log("conectado");
const url = "http://localhost:4002/camper"
let Post = async (object) => {
    console.log(object);
    try{
    await fetch(url,{method: "POST",
    body: JSON.stringify(object),
    headers:{
        "Content-Type": "application/json"
    }
})
    }catch (error) {
        console.log(error)
    }
    console.log("funcinando")
}

Post({nombre:"Sherman"});

const getCampers = async () => {
    try {
        const result = await fetch(url)
        const campers = await result.json();
        return campers
    }
    catch (error) {
        console.log(error)
    }
}
console.log(await getCampers())