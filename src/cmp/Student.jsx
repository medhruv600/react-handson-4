import React from 'react'

const Student = () => {
    return (
        <>
            <div>
                <br />
                <span className='detail'>Students Details</span>
                <button className='add'>Add new student</button>
            </div>
            <br />
            <div className="tableData">
                <table border={1}>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                    </tr>
                    <tr>
                        <td>John</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>October</td>
                    </tr>
                    <tr>
                        <td>Doe</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>November</td>
                    </tr>
                    <tr>
                        <td>Biden</td>
                        <td>26</td>
                        <td>MERN</td>
                        <td>September</td>
                    </tr>
                    <tr>
                        <td>Barar</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>September</td>
                    </tr>
                    <tr>
                        <td>Christ</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>October</td>
                    </tr>
                    <tr>
                        <td>Elent</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>November</td>
                    </tr>
                    <tr>
                        <td>Harshita Sharma</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>October</td>
                    </tr>
                </table>
            </div >
        </>
    )
}

export default Student