"use client"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getOneTrip, deleteTrip } from "@/app/redux/tripSlice";

export default function SingleTrip() {
    const { isLoading, trips } = useSelector(state => state.trips)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;


    useEffect(() => {
        dispatch(getOneTrip(id));
    })

    return ( 
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                Trip ID: { trips.id }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Trip Starting Time: { trips.start } </li>
                <li className="list-group-item"> Trip ending Time: { trips.end } </li>
                <li className="list-group-item"> Trip Destination: { trips.destination } </li>
                <li className="list-group-item"> Trip Location: { trips.location } </li>
                <li className="list-group-item"> Trip Type: { trips.type } </li>
                <li className="list-group-item"> Trip Price: { trips.price } </li>
                <li className="list-group-item"> Trip Description: { trips.description } </li>
            </ul>
            <div className="card-footer">
            <button type="button" className="btn btn-danger"
                onClick={() => dispatch(deleteTrip(trips.id))}>
                    Delete </button>
                <Link href= { "/trip/edit"+ trips.id }> 
                <button type="button" className="btn btn-info">
                    Edit
                </button>
                </Link>
            </div>
        </div>
     );
}