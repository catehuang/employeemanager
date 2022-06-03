import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
        return (
                <div class="flex p-5 space-x-8 bg-gray-900 align-middle">
                        <Link to='/'>
                                <p class="text-xl font-bold text-amber-200">Employee Manager</p>
                        </Link>

                </div>
        )
}

export default Header;
