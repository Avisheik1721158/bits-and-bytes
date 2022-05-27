import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-3xl font-bold text-red-500'>Welcome to Dashboard</h2>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                        {
                            !admin && <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            !admin && <li><Link to='/dashboard/review'>My Reviews</Link></li>
                        }
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        {
                            admin && <li><Link to='/dashboard/users'>All Users</Link></li>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;