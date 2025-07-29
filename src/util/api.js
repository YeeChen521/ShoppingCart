export default async function fetching () {
    try{
        const response = await fetch('https://fakestoreapi.com/products/')

        if(!response.ok){
            throw new Error(`HTTP error! Status : ${response.status}`);
        }

        const data = await response.json();
        
        return data.map(item => ({
            id : item.id,
            title : item.title,
            price : `$${item.price}`,
            description : item.description,
            category : item.category,
            imageURL : item.image,
            rate : item.rating.rate,
            count : item.rating.count

        }));

    }catch(error){
        console.error("Error fetching data: ",error);
        return [];
    }

}