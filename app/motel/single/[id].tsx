"use client"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneMotel, deleteMotel } from "@/app/redux/motelSlice";
import { useRouter } from "next/router";

export default function SingleMotel() {
    const { isLoading, motels } = useSelector(state => state.motels)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        dispatch(getOneMotel(id));
    })
    return ( 
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                Motel ID: { motels.id }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Motel Name: { motels.name } </li>
                <li className="list-group-item"> Motel Location:  { motels.location } </li>
                <li className="list-group-item"> Motel Size: { motels.size } </li>
                <li className="list-group-item"> Motel City:  { motels.city } </li>
                <li className="list-group-item"> Motel Count: { motels.count } </li>
            </ul>
            <div className="card-footer">
                <button type="button" className="btn btn-danger"
                onClick={() => dispatch(deleteMotel(motels.id))}>
                    Delete </button>
                <Link href= { "/motel/edit"+ motels.id }> 
                <button type="button" className="btn btn-info">
                    Edit
                </button>
                </Link>
            </div>
        </div>
     );
}