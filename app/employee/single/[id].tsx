"use client"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOneUser, deleteUser } from "@/app/redux/userSlice";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SingleEmployee (){
    const { isLoading, users } = useSelector(state => state.users)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        dispatch(getOneUser(id));
    })
    return ( 
        <div className="card" style={{ width: 18rem }}>
            <div className="card-header">
                Employee ID: { users.id }
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> Employee First Name: { users.firstname } </li>
                <li className="list-group-item"> Employee Middle Name: { users.middlename } </li>
                <li className="list-group-item"> Employee Last Name: { users.lastname } </li>
                <li className="list-group-item"> Employee Age: { users.age } </li>
                <li className="list-group-item"> Employee Phone: { users.phone } </li>
                <li className="list-group-item"> Employee Telephone: { users.telephone } </li>
                <li className="list-group-item"> Employee Work: { users.work } </li>
                <li className="list-group-item"> Employee Experience: { users.experience } </li>
                <li className="list-group-item"> Employee Marital Status: { users.marital } </li>
            </ul>
            <div className="card-footer">
            <button type="button" className="btn btn-danger"
            onClick={ ()=> dispatch(deleteUser(users.id)) }>
                 Delete </button>
            <Link href= { "/employee/edit" + users.id }> 
            <button type="button" className="btn btn-info">
                 Edit
            </button>
            </Link>
            </div>
        </div>
     );
}