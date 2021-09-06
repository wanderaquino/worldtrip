import continents from "../../../../db.json"

export default function Continents (request, response) {
    const queryId = parseInt(request.query.id);
    const continent = continents.find(
        continent => continent.id === queryId
    );

    if(request.method === "GET") {
        response.status(200).json(continent)
    } else {
        response.writeHead(302, {Location: "/"})
    }
}