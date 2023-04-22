import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import React from 'react'

const Cookies = () => {

    const MySwal = withReactContent(Swal)

    Swal.fire('Bienvenido, acepta las cookies')
}

export default Cookies
