"use client"
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMotel } from "@/app/redux/motelSlice";

export default function AllMotel() {
    const dispatch = useDispatch();
    const { isLoading, motels } = useSelector(state => state.motels);
    useEffect(() => {
        dispatch(getMotel());
    })
    return ( 
        <div>
            { isLoading && <div> Loading.... </div> }
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"> Name </th>
                    <th scope="col"> Location </th>
                    <th scope="col"> Size </th>
                    <th scope="col"> City </th>
                    <th scope="col"> rooms count </th>
                    <th scope="col"> Operation </th>
                    </tr>
                </thead>
                <tbody>
                    { motels && motels.length> 0 ? motels.map((motel) => (
                        <tr>
                            <th scope="row"> { motel.id } </th>
                            <td> { motel.name } </td>
                            <td> { motel.location } </td>
                            <td> { motel.size } </td>
                            <td> { motel.city } </td>
                            <td> { motel.count } </td>
                            <td> 
                            <Link href= {"/motel/single" + motel.id}> 
                                <button type="button" className="btn btn-primary">
                                    Read
                                </button>
                            </Link> 
                        </td>
                        </tr>
                    )): "Ooooops there's no data" }
                    
                </tbody>
            </table>
        </div>
     );
}