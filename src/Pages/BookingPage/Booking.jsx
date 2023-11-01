import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provoidor/AuthProvidor";
import swal from "sweetalert";

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState()

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [url])

    const HandelDelete = id => {
        const proceed = confirm('are you sure? you wont to delete')

        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        swal("Good job!", "Your order delete successfully", "success");
                        const remaining = booking.filter(books => books._id !== id)
                        setBooking(remaining)
                    }

                })
        }
    }

    const HandelConfirm = id => {
        // const proceed = confirm('are you sure? you wont to confirm')


        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(books => books._id !== id)
                    const updated = booking.find(books => books._id !== id)
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining]
                    setBooking(newBooking)
                }

            })

    }


    return (
        <div className="overflow-x-auto">
            {
                booking?.map(book => <div key={book?._id}>
                    <table className="table">

                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>

                                    <button onClick={() => HandelDelete(book?._id)} className="btn btn-sm">X</button>

                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className=" w-12 h-12">
                                                <img src={book?.service_img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book?.customerName}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book?.price}
                                </td>
                                <td>{book?.date}</td>
                                <th>
                                    {
                                        book.status == 'confirm' ? <span className="text-indigo-800 font-bold underline">Confirmed</span>
                                            : <button onClick={() => HandelConfirm(book._id)} className="btn btn-ghost btn-xs">Please confirm</button>
                                    }

                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>)
            }
        </div>
    );
};

export default Booking;