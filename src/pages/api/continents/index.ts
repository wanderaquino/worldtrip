import continents from "../../../../db.json"

export default function Continents (request, response) {
    console.log(request.query)
    if(request.method === "GET") {
        response.status(200).json(continents)
    } else {
        response.writeHead(302, {Location: "/"})
    }
}