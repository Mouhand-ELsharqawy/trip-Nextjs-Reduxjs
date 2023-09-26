"use client"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getOneBus } from "@/app/redux/busSlice";
import { deleteBus } from "@/app/redux/busSlice";

export default function SingleBus(){
    const { isLoading, buses } = useSelector(state  => state.buses);
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        dispatch(getOneBus(id));
    })
    return ( 
        <div className= "card" style={{ width: 18rem  }}>
            <div className= "card-header">
                Bus ID: { buses.id }
            </div>
            <ul className= "list-group list-group-flush">
                <li className= "list-group-item"> Bus Numbers: { buses.numbers } </li>
                <li className= "list-group-item"> Bus Chars: { buses.chars } </li>
                <li className= "list-group-item"> Bus Driver First Name: { buses.firstname } </li>
                <li className= "list-group-item"> Bus Driver Last Name: { buses.lastname } </li>
                <li className= "list-group-item"> Bus Driver Phone: { buses.phone } </li>
                <li className= "list-group-item"> Bus Driver License: { buses.license } </li>
            </ul>
            <div className= "card-footer">
            <button type="button" className= "btn btn-danger"
            onClick={() => dispatch(deleteBus(buses.id))}>
                 Delete </button>
            <Link href= { "/bus/edit" + buses.id }> 
            <button type="button" className= "btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
     );
}