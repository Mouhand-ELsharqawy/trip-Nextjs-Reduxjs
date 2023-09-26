"use client"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getOneGuest, deleteGuest } from "@/app/redux/guestSlice";
import Link from "next/link";

export default function SingleGuest() {
    const { isLoading, guests } = useSelector(state => state.guests)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        dispatch(getOneGuest(id));
    })
    return ( 
        <div className="card" style={{ width: 18rem  }}>
            <div className="card-header">
                Guest ID: { guests.id }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Guest First Name: { guests.firstname } </li>
                <li className="list-group-item"> Guest Last Name: { guests.lastname } </li>
                <li className="list-group-item"> Guest Phone: { guests.phone } </li>
                <li className="list-group-item"> Guest National ID: { guests.nationid } </li>
                <li className="list-group-item"> Guest Nationality: { guests.nationality } </li>
                <li className="list-group-item"> Guest Age: { guests.age } </li>
                <li className="list-group-item"> Guest Health Status: { guests.health } </li>
            </ul>
            <div className="card-footer">
            <button type="button" className="btn btn-danger"
            onClick={ () => dispatch(deleteGuest(guests.id)) }>
                 Delete </button>
            <Link href= { "/guest/edit" + guests.id }> 
            <button type="button" className="btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
     );
}