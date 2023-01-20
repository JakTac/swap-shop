import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sellListing from '../Accounts/ProfilePage';


    const SaleHistory = () => {
        const [ sales, setSales ] = useState([])
        const [ accountUser, setAccountUser ] = useState([])
        const [ date, setDate ] = useState([])
        const [ category, setCategory ] = useState([])
        const [ formData, setFormData ] = useState([])

        const getSaleHistory = async () => {
            const url = `${process.env.REACT_APP_swapshop_API_HOST}/listings/`;
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setSales(data.sales);
            } else {
                console.log("There was an error displaying your sale history.")
                // Need to add an on-screen error too
            }
        }

    useEffect(() => {
        getSaleHistory();
    }, []
    )

    useEffect(() => {
        const loadSaleHistory = async () => {
            const accountUserUrl = `${process.env.REACT_APP_swapshop_API_HOST}/listings/`;
            const response = await fetch(accountUserUrl);

            if (response.ok) {
                const data = await response.json();
                setAccountUser(data.accountUser);
            } else {
                console.log("There was an error loading the account user in order to display their sale history.")
                // Need to add an on-screen error message here too
            }
        }

        loadSaleHistory()

    }, []
    )

    // const handleFormChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.values
    //     })
    // }

    // ADD A FILTERING FUNCTION THAT ONLY DISPLAYS THE CURRENT USER'S SALES

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1>Your Sale History</h1>

                    console.log("// ADD A SEARCH FUNCTIONALITY //")

                    {/* <div className="">
                        <select onChange={handleFormChange} value={formData.date} className="form-select" required name="date" id="date">

                            <option value="">Select a date range</option>
                            {date?.map(date) => {
                                return(
                                    <option key={date} value={date.date}>{date.date}</option>
                                )
                            }}

                        </select>
                    </div>

                    <div className="">
                        <option value="">Select a product category</option>
                        {category?.map(category) => {
                            return(
                                <option key={category.id} value={category.name}>{category.name}</option>
                            )
                        })}
                    </div> */}

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Date sold</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sales.map(sale => {
                                    return(
                                        <tr key={ sale.id }>
                                            <td>{ sale.fields.image_url }</td>
                                            <td>{ sale.fields.name }</td>
                                            <td>{ sale.fields.category_id }</td>
                                            {/* <td>{ sale.fields.date }</td>
                                            console.log("Not sure how to tie the date the bool box was clicked to this ^ self-updating column") */}
                                            <td>{ sale.fields.price }</td>
                                            {/* <td>sellListing()</td> */}
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                    <Link to="/listing/create"><button className="btn btn-primary">Create a new listing</button></Link>

                </div>
            </div>
        </div>
    );
}

export default SaleHistory;
