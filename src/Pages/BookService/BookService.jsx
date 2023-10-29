import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const BookService = () => {
    const [book, setBook] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <h1>fdjhjh</h1>
        </div>
    );
};

export default BookService;